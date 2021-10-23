import { Route } from "react-router";

type layout = {
    children: JSX.Element;
}

function Layout({ children }: layout): JSX.Element {
    return (
        <main id="main" className="md:mx-10 sm:mx-2 my-10">
            {children}
        </main>
    )
}

type mainLayout = {
    component: any;
    path: string;
    exact: boolean;
}

export default function MainLayout({ component: Component, path, exact, ...etc }: mainLayout): JSX.Element {
    return (
        <Route path={path} exact={exact} {...etc} render={(props) => (
            <Layout>
                <Component {...props} />
            </Layout>
        )} />
    )
}