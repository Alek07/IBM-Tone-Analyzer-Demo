# Tone Analyzer Demo

This is a small project I made to test IBM Cloud Watson Services using Vue.js and FastApi.

## Stack and Services

- [Vue.js](https://vuejs.org/) v2
- [FastApi](https://fastapi.tiangolo.com/) v0.65.1
- [IBM Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)
- [IBM Watson Language Translator](https://www.ibm.com/watson/services/language-translator/)

## Installation and Usage

### Backend

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install fastapi and uvicorn (required to run the server)

```bash
pip install fastapi
pip install uvicorn[standard]
```

Once installed you can run the server with the following command

```bash
uvicorn app.main:app --reload
```

**Note: You need to provide your IBM Cloud Resources API credentials in a .env file in order to start the server**

```env
TONE_ANALYZER_API_KEY='your key'
TONE_ANALYZER_URL='your url'
TONE_ANALYZER_VERSION='resource version'

TRANSLATOR_API_KEY='your key'
TRANSLATOR_URL='your url'
TRANSLATOR_VERSION='resource version'
```

### Frontend

Run the following command to install all dependencies

```bash
yarn
```

Once installed you can run the server with the following command

```bash
yarn serve
```

**You also need to add the server IP in a .env file to consume the service**

```env
VUE_APP_API_URL='ip where the backend server is running'
```
