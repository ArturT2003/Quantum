# Lux Matrix — исходный код сайта

Готовый статический сайт без зависимостей и этапа сборки.

## Локальный запуск

```bash
python -m http.server 8080 --directory dist
```

Откройте `http://localhost:8080` в браузере.

## Публикация на Vercel

При импорте GitHub-репозитория укажите:

- Framework Preset: `Other`
- Root Directory: `dist`
- Build Command: оставить пустым
- Output Directory: оставить пустым

## Основные файлы

- `dist/index.html` — разметка экранов;
- `dist/styles.css` — стили и мобильная адаптация;
- `dist/app.js` — навигация, график, настройки, банки и локализация;
- `dist/assets/lux-matrix-logo.png` — логотип загрузочного экрана;
- `dist/favicon-lm.png` — favicon и иконка для телефона.

Пользовательские настройки сохраняются в `localStorage` браузера.
