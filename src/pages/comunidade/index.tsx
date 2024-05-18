import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import CommunityPage from "./styles/styles";

export default function Community(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Comunidade`}
      description="Comunidade do SigNoz"
    >
      <main>
        <CommunityPage />
      </main>
    </Layout>
  );
}
