// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import LightbulbIcon from '@/assets/svg/undraw_google_docs_re_evm3.svg';
import ValidateIcon from '@/assets/svg/undraw_specs_re_546x.svg';
import DiscoverIcon from '@/assets/svg/undraw_process_re_gws7.svg';
import CollaborateIcon from '@/assets/svg/undraw_working_re_ddwy.svg';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Echo-Thoughts</title>
        <meta name="description" content="Validate your SaaS ideas with the community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="max-w-7xl mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Echo Thoughts</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Item 1</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login Via Github</a>
          </div>
        </div>
      </header>


      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16 ">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center max-w-7xl">
            {/* Left Content Section */}
            <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4">Turn Ideas Into Reality</h2>
              <p className="text-gray-700 mb-6">
                Share your SaaS ideas, validate them with the community, and discover what resonates.
              </p>
              <a href="#join" className="btn btn-primary">
                Get Started
              </a>
            </div>

            {/* Right Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <Image priority src={LightbulbIcon} alt="Lightbulb of Ideas" height={500} />
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="py-16 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Why Use Echo-Thoughts?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-md rounded p-6">
              <div className="flex justify-center mb-4">
                <Image src={ValidateIcon} alt="Validate Icon" className="w-48 h-48" />
              </div>
              <h4 className="font-bold text-xl mb-2">Validate Your Ideas</h4>
              <p className="text-gray-600">Submit ideas and receive real-time feedback from the community.</p>
            </div>
            <div className="card bg-white shadow-md rounded p-6">
              <div className="flex justify-center mb-4">
                <Image src={DiscoverIcon} alt="Validate Icon" className="w-48 h-48" />
              </div>
              <h4 className="font-bold text-xl mb-2">Discover Trends</h4>
              <p className="text-gray-600">See what resonates and what doesn’t, based on voting and comments.</p>
            </div>
            <div className="card bg-white shadow-md rounded p-6">
              <div className="flex justify-center mb-4">
                <Image src={CollaborateIcon} alt="Validate Icon" className="w-48 h-48" />
              </div>
              <h4 className="font-bold text-xl mb-2">Collaborate</h4>
              <p className="text-gray-600">Join forces with like-minded individuals to bring ideas to life.</p>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Share Your Idea?</h3>
          <p className="text-gray-700 mb-6">Join Echo-Thoughts today and start validating your ideas with the community!</p>
          <a href="#" className="btn btn-accent">
            Sign Up Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Echo-Thoughts. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
