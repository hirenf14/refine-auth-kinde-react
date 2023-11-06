# @refine-auth/kinde-react

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![NPM Version](https://img.shields.io/npm/v/@refine-auth/kinde-react.svg)](https://www.npmjs.com/package/@refine-auth/kinde-react)
[![NPM Downloads](https://img.shields.io/npm/dt/@refine-auth/kinde-react.svg)](https://www.npmjs.com/package/@refine-auth/kinde-react)
![GitHub Repo stars](https://img.shields.io/github/stars/hirenf14/refine-auth-kinde-react)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/hirenf14/refine-auth-kinde-react)


`@refine-auth/kinde-react` is an auth provider for `refine` to integrate `kinde` authentication.

## Installation & Usage

You can install the library using npm or yarn:

```sh
npm install @refine-auth/kinde-react
# or
yarn add @refine-auth/kinde-react

```

### Add Provider Component
Kinde uses a React Context Provider to maintain its internal state in your application.

Import the Kinde Provider component and wrap your application in it.

```jsx
import { RefineKindeProvider } from "@refine-auth/kinde-react";

<RefineKindeProvider
    clientId="KINDE_CLIENT_ID"
    domain="KINDE_DOMAIN"
    logoutUri={window.location.origin}
    redirectUri={window.location.origin}
>
    <App />
</RefineKindeProvider>
```

### Basic Hook Usage

To use `authProvider` with [Refine](https://refine.dev) App, use Hook.

```jsx
import { useAuthProvider } from "@refine-auth/kinde-react";

const App = () => {
    const { authProvider } = useAuthProvider();
  return (
    <Refine
      authProvider={authProvider}
      /* ... */
    >
      {/* ... */}
    </Refine>
  );
};
  
```

### How to use login
[Kinde](https://kinde.com/) is using redirection based authentication. So, instead of `AuthPage`, we just need to use `login` method.

```jsx
import { useLogin } from "@refinedev/core";

const { mutate: login } = useLogin();

// ***

<Button onClick={() => login({redirectPath: "/"})}>
    Sign in
</Button>

```

## Properties

The `useAuthProvider` hook returns the following properties:

- `authProvider` ([AuthProvider](https://refine.dev/docs/api-reference/core/providers/auth-provider/#methods)): Object with methods from `AuthBinding` of `refine`.

- `isLoading` (boolean): A flag that indicates whether authentication is currently being loaded or fetched. You can use this property to conditionally render loading indicators or content.

- `token` (string): Represents authentication token, to be used for API authentications.


## Documentation
- For more detailed information and usage, refer to [the refine auth provider documentation](https://refine.dev/docs/api-reference/core/providers/auth-provider/).
- [Refer to documentation for more info about refine](https://refine.dev/docs/)
- [Step up to refine tutorials.](https://refine.dev/docs/tutorial/introduction/index/)
- [To know more on Kinde](https://kinde.com/docs/)


Made with ❤️ by [Hiren F](https://hiren.codes/) | [GitHub](https://github.com/hirenf14/refine-auth-kinde-react)