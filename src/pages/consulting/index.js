import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

function caseStudies() {
    return (
      <Layout title="DevOps Consulting">
        <section>
        <div className="container" style={{marginTop: '2rem', marginBottom:'4rem'}}>
          
          <h2 style={{textAlign: "center"}} > Consultoria DevOps </h2>
          <p style={{textAlign: "center"}}> Conheça nossos clientes e a stack implementada em nossa consultoria </p>
  
          <div className={"row"}>
              <div className={"col col--6 margin-vert--md"}>
                  <div class="card">
                      <div class="card__header">
                          <h3> Integras Fácil </h3>
                      </div>
                      <div class="card__image">
                        <img
                            src="/img/consulting/integrasfacil.png"
                            alt="IntegrasFacil"
                         />
                      </div>
                      <div class="card__body">
                          <p>

                          </p>
                      </div>
                      <div class="card__footer">
                      <Link
                        className="button button--primary"
                        href={"/consulting/integrasfacil/"}
                      >
                       Leia mais 
                      </Link>
                      </div>
  
                  </div>
              </div>
              <div className={"col col--6 margin-vert--md"}>
                  <div class="card">
                      <div class="card__header">
                          <h3>Datasolid Tech Solutions</h3>
                          
                      </div>
                      <div class="card__image">
                        <img
                            src="/img/consulting/datasolid.png"
                            alt="Datasolid Tech Solutions"
                             />
                      </div>
                      <div class="card__body">
                          <p>
                          </p>
                      </div>
                      <div class="card__footer">
                      <a class="button button--primary"
                       href="/consulting/datasolid/" 
                       >Leia mais</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>  
        </section>
    </Layout>
  );
}
export default caseStudies;