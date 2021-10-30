import Head from 'next/head'
import Link from 'next/link'
import React from "react";
import ReactDOM from "react-dom";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> A bit about Myself!</title>
        <link rel="icon" href="/photo.jpg" />
      </Head>

      <main>
		<h1 className="title">
          Here are a few lines about me!
        </h1>

        <p className="description">
          Adaptable and self-driven individual with a Masters in Business Management from <a href= "https://ximb.edu.in/">Xavier Institute of Management, Bhubaneswar (XIMB)</a> 
		  <br/> and a total of around 6.5+ of professional experience spanning across US, EMEA, UK, India and APAC clients.
        </p>
        <div className="grid">
          <a className="card">
            <h3>Tech Enthusiast</h3>
            <p>Have had extensive experience working on different SaaS-based solutions, spanning CPaaS, DAP, Core Banking domains.</p>
          </a>
          <a className="card">
            <h3>Solution Driven</h3>
            <p>I have consistently strived to pitch Value to customers that have enabled closures of approx 70% of deals on average</p>
          </a>
		   <a className="card">
            <h3>Quick Learner/Active Listener</h3>
            <p>Like Einstein(allegedly!) said <i>I may not know the answer to everything, but I can surely FIND the answer to it!</i><br/>
            Listening is equally important and having worked with clients like Uber, Honda, Cisco, Raytheon I know that it is the active listening that helps tweak product positioning</p><br/>
          </a>
          <a className="card">
            <h3>Tuned to Start up Ecosystem</h3>
            <p>In my career, I have progressively moved to more and more challenging roles and those include working for Startups for the last 3+ years. <br/> I have understood the startup culture thoroughly and completely tuned to it! In fact, honestly, working in a big conglomerate leads to eventual stagnation of interesting challenges</p>
          </a>
		  <a className="card1">
            <h3>Long Term Vision</h3>
            <p>I do believe Vercel's long term goals are in alignment with my vision as well. I would like to be a Strategic Leader in a few years time working in Vercel. The Team at Vercel is growing and I would like to grow with the team and make this move from a $ 1.1 B to an $ 11 B company!!</p>
		  </a>
		</div>
		<h2 className="description">
		Please find my LinkedIn handle <a href= "linkedin.com/in/shankarsarkar1991">Here</a> for more about me! &#128578;
		</h2>
		<h2 className="description">
        <Link href="/levels/level1">
          <a>&larr; Back to Vercel Guide</a>
        </Link>
		<a>&nbsp;&nbsp;</a>
		<Link href="/">
          <a>Lets Go Home &#8634;</a>
        </Link>
      </h2>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a,
		.description a{
          color: #ff6b18;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active,
		.description a:hover,
        .description a:focus,
        .description a:active{
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
		.card1 {
          margin: 1rem;
          flex-basis: 70%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active,
		.card1:hover,
        .card1:focus,
        .card1:active		{
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3,
		.card1 h3		{
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p,
		.card1 p{
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
