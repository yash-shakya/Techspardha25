# Techspardha25

We are using Turbo repo to manage all our frontend apps
- techspardha website : /app/web (NextJS@15 Default)
- excalibur website : /app/excalibur (ReactJS Already Built)
- hackshetra website : /app/hackshetra (ReactJS)
- designathon website? : /app/designathon (TBD)

**Use `yarn` package manager**

### Learn about MonoRepo and Turborepo
(To fully utilise the power of Turborepo)

#### What's inside?

This Turborepo includes the following packages/apps:

##### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

##### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

##### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

##### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

##### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## 📝 Commit Message Guidelines

This project follows the **Conventional Commits** specification to ensure a consistent commit message format. This helps in understanding the purpose of each commit and automates tasks like versioning and changelog generation.

### 🎯 Commit Message Format

```
<type>(<scope>): <description>
```

- **`type`**: Describes the kind of change. Must be one of the following:
  - `feat`: A new feature.
  - `fix`: A bug fix.
  - `docs`: Documentation changes only.
  - `style`: Changes that do not affect the meaning of the code (e.g., formatting, missing semicolons).
  - `refactor`: Code changes that neither fix a bug nor add a feature.
  - `perf`: Performance improvements.
  - `test`: Adding or updating tests.
  - `chore`: Miscellaneous tasks like updating build scripts.
  - `revert`: Reverts a previous commit.

- **`scope`** (optional): A brief identifier specifying the part of the codebase affected (e.g., `auth`, `cart`, `readme`).

- **`description`**: A concise description of the change.

---

### 🛠️ Examples

Here are some examples of valid commit messages:

- `feat(auth): add login functionality`
- `fix(cart): resolve item count issue`
- `docs(readme): update contributing guide`

---

### 🚫 Validation

Commit messages are validated using `@commitlint` during the commit process. If your commit message doesn't follow the required format, you'll see an error like this:

```
❌ Commit message validation failed!

💡 Your commit message should follow the Conventional Commits format:
   <type>(<scope>): <description>

👉 Please amend your commit message and try again:
   git commit --amend -m 'valid commit message'
```

---

### 🔧 Overriding the Validation

If you need to bypass the validation (not recommended), use the `--no-verify` flag:

```bash
git commit -m "your commit message" --no-verify
```

However, ensure to follow the format to maintain consistency in the project's commit history.

---

### 📚 Resources

For more details, see the [Conventional Commits Specification](https://www.conventionalcommits.org/).