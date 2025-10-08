# 🧍‍♂️ Users Filter App

Простое React-приложение для фильтрации и пагинации списка пользователей.  
Реализовано на **Vite + TypeScript + React**, с дебаунсом запросов и имитацией API.

## 🚀 Функциональность

- 🔍 Фильтрация по имени и возрасту
- ⏳ Дебаунс (задержка запросов 500 мс)
- 📄 Пагинация и выбор размера страницы
- 🌀 Лоадер при загрузке
- ⚡ Быстрая работа (Vite + TypeScript)

## 🛠️ Технологии

- React 18
- TypeScript
- Vite
- CSS / Inline Styles
- Fake API (эмуляция серверного запроса)

## 🧩 Структура проекта

```bash
src/
├── api/
│ └── users.ts # mock API (имитация запроса)
├── components/
│ └── Loader.tsx # компонент загрузки
├── pages/
│ └── UsersPage.tsx # основная страница
├── main.tsx # точка входа
└── App.tsx # маршрутизация / оболочка
```

## 🧰 Установка и запуск

### 1️⃣ Клонируем репозиторий

```bash
git clone https://github.com/<твой_никнейм>/users-filter-app.git
cd users-filter-app
npm install
npm run dev
Открой http://localhost:5173 в браузере 🌐
```
