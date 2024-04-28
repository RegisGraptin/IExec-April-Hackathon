'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function Header() {

    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()


    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">
                    <img className='rounded-lg' src="/images/logo.png" alt="mockup" width={40} />
                    RouteGuard
                </Link>
                

                <ul className="menu menu-horizontal px-5">
                    <li>
                        <Link className="btn btn-ghost text-xl" href="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-none">


                <ul className="menu menu-horizontal px-1">
                    {account.status === 'connected' && (
                        <li>
                            <button type="button" onClick={() => disconnect()}>
                                Disconnect
                            </button>
                        </li>
                    )}

                    {account.status !== 'connected' && connectors.map((connector, index) => (

                        <li key={connector.uid}>
                            <button
                                onClick={() => connect({ connector })}
                                type="button"
                            >
                                {connector.name}
                            </button>
                        </li>

                    ))}
                </ul>

            </div>
        </div>
    )
}