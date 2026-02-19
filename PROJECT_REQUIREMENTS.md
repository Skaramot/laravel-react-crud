# Project runtime requirements (Laravel + React)

## Runtime
- PHP >= 8.3 (recommended for dev/test tooling)
- Composer >= 2.6
- Node.js >= 20.19.0 (or >= 22.12.0)
- npm >= 10

## PHP Extensions
- bcmath
- ctype
- curl
- dom
- fileinfo
- filter
- hash
- mbstring
- openssl
- pdo
- pdo_mysql or pdo_sqlite
- session
- tokenizer
- xml

## Database
- MySQL >= 8.0 or SQLite >= 3

## Setup Commands
```powershell
composer install
Copy-Item .env.example .env
php artisan key:generate
# If using SQLite:
# New-Item -ItemType File -Path database/database.sqlite -Force
php artisan migrate
npm ci
npm run dev
```

## Notes
- `composer.json` allows PHP `^8.2` for runtime.
- `composer.lock` dev/test stack includes `pestphp/pest v4.3.2`, which requires PHP `^8.3`.
- `package-lock.json` pins `vite v7.3.1`, which requires Node `^20.19.0 || >=22.12.0`.
