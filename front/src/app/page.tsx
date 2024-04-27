'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      <Header />

      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              RouteGuard
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A new solution for tracking and managing your vehicles securely and privately.
              By leveraging the power of blockchain, we provide real-time insights into
              your fleet's movements while ensuring the integrity and confidentiality of your data.
            </p>

            <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" href="/dashboard">
              See the Dashboard
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className='rounded-lg' src="/images/main.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

          <div className="grid mt-6">
            <img className='rounded-lg' src="/images/plan.png" alt="mockup" />
          </div>

          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Track Your Fleet in Real-Time
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Gain full visibility into how your fleet moves, interacts, and exchanges information.
              With RouteGuard, you can monitor your vehicles' locations, routes, and status updates in real-time, empowering you to make informed decisions and optimize operations.
            </p>
          </div>

        </div>

      </section>


      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Protect Your Data with Blockchain
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              By using IExec Oracle technology, we ensure the security and privacy of your data like never before. Each transaction and interaction is securely recorded on the blockchain, providing an immutable and tamper-proof ledger of your vehicle's journey and ownership history.

              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              With RouteGuard, you can monitor your vehicle fleet in real-time, witnessing and verifying each interaction. Whether you're overseeing package deliveries or managing logistics, RouteGuard provides transparency at every step of the process.
            </p>
          </div>

          <div className="grid mt-6">
            <img className='rounded-lg' src="/images/position.png" alt="mockup" />
          </div>
        </div>
      </section>


      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

          <div className="grid mt-6">
            <img className='rounded-lg' src="/images/share.png" alt="mockup" />
          </div>


          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Control your data
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">

              Easily grant or revoke access to some vehicules information at a given time, ensuring complete control over your information.

              By using the IExec enclave Oracle system, you are the sole entity with access to your data. This ensures the utmost privacy and security, giving you peace of mind that your information remains confidential.

              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              Enable cross-application computation securely with RouteGuard. By allowing applications to access your fleet's position privately in a secure environment, you can facilitate private route planning and delivery processes.

              Manage your operations efficiently while safeguarding sensitive information.
              RouteGuard puts you in control of your data, ensuring privacy and security at every step.

              {/* RouteGuard empowers you to manage your operations efficiently while safeguarding sensitive information. */}

            </p>
          </div>

        </div>

      </section>


      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Get Started</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Start to monitor your vehicles' locations.
            </p>
            <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" href="/dashboard">
              See the Dashboard
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>


          </div>
        </div>
      </section>



      <footer className="p-4 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src="/images/logo.png" className="mr-3 h-6 sm:h-16" alt="Health Book Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  RouteGuard
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">RouteGuard™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default App
