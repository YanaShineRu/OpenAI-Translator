# OpenAI-Translator | OpenAI-Переводчик
> Расширение для Google Chrome которое переводит интерфейс OpenAI Chat (ChatGPT) на русский язык.

> На текущий момент проблема с рееализацией перевода всплывающих диалоговых окон $\textcolor{green}{\textsf{ id="radix-:[a-zA-Z0-9]+:" }}$  решить проблему к сожалению не могу, но попытки справиться с задачей не бросаю.
```html
<div role="dialog" id="radix-:r1:" aria-describedby="radix-:r3:" aria-labelledby="radix-:r2:" data-state="open" class="relative col-auto col-start-2 row-auto row-start-2 w-full rounded-lg text-left shadow-xl transition-all left-1/2 -translate-x-1/2 !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]" tabindex="-1" style="pointer-events: auto;">
  <!-- Контент окна -->
</div>

<div role="dialog" id="radix-:r2q:" aria-describedby="radix-:r2s:" aria-labelledby="radix-:r2r:" data-state="open" class="relative col-auto col-start-2 row-auto row-start-2 w-full rounded-lg text-left shadow-xl transition-all left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 md:w-[680px]" tabindex="-1" style="pointer-events: auto;">
  <!-- Контент окна -->
</div>
```
```javascript
// Функция для перевода элементов с ID, соответствующим маске
function translateElementsWithId(idMask) {
  const elements = document.querySelectorAll("[id^='" + idMask + "']");
  elements.forEach(element => {
    translateNode(element);
  });
}

// Функция для инициализации перевода
function initTranslation() {
  // Перевести содержимое документа
  translateNode(document.documentElement);
  // Перевести элементы по маске ID
  const idMask = "radix-:[a-zA-Z0-9]+:";
  translateElementsWithId(idMask);
  // Наблюдать за изменениями в дереве DOM
  observeChanges();
}
```

# ![](https://raw.githubusercontent.com/YanaShineRu/OpenAI-Translator/main/OpenAI-Translator.png)
