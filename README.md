# Compliment API (BG / EN)

Просто API, което връща красиви, нежни и романтични комплименти на български и английски, със сладки обръщения: Дими, Фъсти, Обич и други.

## Стартиране локално
```bash
npm install
npm start
```
Отвори: http://localhost:3000

## Endpoint-и
- `/` – информация
- `/random` – случаен комплимент (смесен)
- `/random?lang=bg` – български
- `/random?lang=en` – английски
- `/all` – всички комплименти

## Deploy (безплатно)
Може да се деплойне безплатно на:
- Render (https://render.com) – Web Service + Auto Deploy от GitHub
- Railway (https://railway.app)
- Fly.io
- Cyclic.sh (много лесно: свързваш GitHub репо и готово)
- Vercel (Node serverless функция)

### Пример с Render
1. Качи кода в GitHub репозитория.
2. В Render: New + Web Service.
3. Свържи репото.
4. build command: `npm install`
5. start command: `npm start`
6. PORT env var се дава автоматично (ползваме process.env.PORT вече)

### Пример с Vercel (serverless)
1. `npm i -D vercel`
2. Създай `api/index.js` и експортирай handler (или адаптирай Express чрез vercel.json).
3. `vercel` и следвай инструкциите.

Успех и приятно използване! ❤️
