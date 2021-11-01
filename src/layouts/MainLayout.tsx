/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { Route } from 'react-router';
import React from 'react';

type LayoutType = {
  children: JSX.Element;
};

function Layout({ children }: LayoutType): JSX.Element {
  return (
    <main id="main" className="md:mx-10 sm:mx-2 my-10">
      {children}
    </main>
  );
}

type MainLayoutType = {
  component: any;
  path: string;
  exact: boolean;
};

export default function MainLayout({
  component: Component,
  path,
  exact,
  ...etc
}: MainLayoutType): JSX.Element {
  return (
    <Route
      path={path}
      exact={exact}
      {...etc}
      render={(props): JSX.Element => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
