import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Convo() {
  return (
    <div>
      <nav className={styles.nav}>
        ENIGMA
      </nav>
    
      <main>
        <div className="intro-text">
          <h1>Are you exhausted with lengthy documents?</h1>
          <a href="#" className="get-started-button">Get Started</a>
        </div>
        
        <div className="card">
        <div className={styles.dottedBox}>
          <h1>Upload files</h1>
          <div className="card-body">
            <section id="file-upload">
              <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" id="upload-file" accept=".pdf,.doc,.docx" />
                {/*  <h4>-OR-</h4> 
                <h4>Drag and drop files</h4> */}
               {/* <button type="submit" id="upload-button">Browse files</button> */}
              </form>
            </section>
            </div>
            <div>
              {/* Add the progress section for file upload here */}
            </div>
          </div>
        </div>
      
        <section id="output">
          <button id="result-button" className="hidden">Analysis Results</button>
          {/* Output section to display analysis results */}
        </section>
      </main>
      
      <footer>
        {/* Footer content goes here */}
      </footer>
      
      {/* Add any other elements or components you need */}
      
      {/* Example of using Next.js Link component */}
      <Link className={styles.link} href="/">Transfer me to Home Page.</Link>
    </div>
  );
}
