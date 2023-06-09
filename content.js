// Объект, содержащий переводы
var translations = {
  "New chat": "Новый чат",
  "Send a message...": "Отправить сообщение...",
  "Send a message": "Отправить сообщение",
  "We’d love to hear from you!": "Мы будем рады услышать вас!",
  "Shape the future of ChatGPT.": "Определите будущее ChatGPT.",  "Hide sidebar": "Скрыть боковую панель",
  "Show sidebar": "Показать боковую панель",
  "Take survey": "Пройти опрос",
  "Too many requests in 1 hour. Try again later.": "Слишком много запросов за 1 час. Повторите попытку позже.",
  "Something went wrong, please try reloading the conversation.": "Что-то пошло не так, пожалуйста, попробуйте перезагрузить чат.",
  "Something went wrong. If this issue persists please contact us through our help center at help.openai.com.": "Что-то пошло не так. Если проблема сохраняется, пожалуйста, свяжитесь с нами через наш справочный центр по адресу help.openai.com.",
  "An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.",  "Произошла ошибка. Либо запрошенный вами двигатель не существует, либо возникла другая проблема при обработке вашего запроса. Если эта проблема сохраняется, пожалуйста, свяжитесь с нами через наш справочный центр по адресу help.openai.com.",
  "Copied!": "Скопировано!",
  "Stop generating": "Остановить генерацию",
  "Upgrade to Plus": "Повышение до Plus",
  "Today": "Сегодня",
  "Previous 7 Days": "Предыдущие 7 дней",
  "Previous 30 Days": "Предыдущие 30 дней",
  "Help & FAQ": "Помощь и вопросы",
  "Settings": "Настройки",
  "Log out": "Выйти",
  "Cancel": "Отмена",
  "network error": "сетевая ошибка",
  "Was this response better or worse?": "Был ли этот ответ лучше или хуже?",
  "Better": "Лучше",
  "Worse": "Хуже",
  "Same": "То же",
  "Save & Submit": "Сохранить и отправить",
  "Clear conversations": "Очистить переписки",
  "Regenerate response": "Регенерировать ответ",
  "Continue generating": "Продолжить генерацию",
  "Copy code": "Скопировать код",
  "Examples": "Примеры",
  "Capabilities": "Возможности",
  "Limitations": "Ограничения",
  "Yesterday": "Вчера",
  "January": "Январь",
  "February": "Февраль",
  "March": "Март",
  "April": "Апрель",
  "May": "Май",
  "June": "Июнь",
  "July": "Июль",
  "August": "Август",
  "September": "Сентябрь",
  "October": "Октябрь",
  "November": "Ноябрь",
  "December": "Декабрь",
  "Your plan": "Твой план",
  "Free plan": "Бесплатный план",
  "You've reached our limit of messages per hour. Please try again later.": "Вы достигли нашего лимита сообщений в час. Пожалуйста, повторите попытку позже.",
  "The message you submitted was too long, please reload the conversation and submit something shorter.": "Сообщение, которое вы отправили, было слишком длинным, пожалуйста, перезагрузите разговор и отправьте более короткое сообщение.",
  "Explain quantum computing in simple terms": "Объясняет квантовые вычисления простыми словами",
  "Got any creative ideas for a 10 year old’s birthday?": "Креативные идеи для дня рождения 10-летнего ребенка",
  "How do I make an HTTP request in Javascript?": "Как сделать HTTP запрос в Javascript?",
  "Remembers what user said earlier in the conversation": "Помнит, что пользователь сказал ранее в разговоре",
  "Allows user to provide follow-up corrections": "Позволяет пользователю вносить последующие исправления",
  "Trained to decline inappropriate requests": "Обучен отклонять неуместные просьбы",
  "May occasionally generate incorrect information": "Может иногда генерировать неверную информацию",
  "May occasionally produce harmful instructions or biased content": "Может иногда создавать вредные инструкции или предвзятый контент",
  "Limited knowledge of world and events after 2021": "Ограниченные знания о мире и событиях после 2021 года",
  "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ": "Перевод от YanaShine (2023) | Бесплатное предварительное исследование. ChatGPT может дать неточную информацию о людях, местах или фактах. ",
  "Only one message at a time. Please allow any other responses to complete before sending another message, or wait one minute.": "Одновременно отправляется только одно сообщение. Перед отправкой другого сообщения дайте возможность завершить все остальные ответы или подождите одну минуту.",
  "There was an error generating a response": "Произошла ошибка при генерации ответа"
};

// Функция для перевода текста
function translateText(text) {
  if (text in translations) {
    return translations[text];
  }
  return text;
}

// Функция для перевода узла
function translateNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    // Если узел является текстовым узлом, переводим его содержимое
    node.textContent = translateText(node.textContent);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // Если узел является элементом
    if (node.hasAttribute("placeholder")) {
      // Перевод атрибута placeholder, если он существует
      const translatedPlaceholder = translateText(node.getAttribute("placeholder"));
      node.setAttribute("placeholder", translatedPlaceholder);
    }
    if (node.hasAttribute("aria-label")) {
      // Перевод атрибута aria-label, если он существует
      const translatedAriaLabel = translateText(node.getAttribute("aria-label"));
      node.setAttribute("aria-label", translatedAriaLabel);
    }
    if (node.getAttribute("role") === "dialog" || node.classList.contains("relative")) {
      // Перевод содержимого элемента, если его роль - диалог или у него есть класс "relative"
      translateNodeContent(node);
    }
    // Рекурсивный вызов перевода для дочерних элементов
    for (let i = 0; i < node.childNodes.length; i++) {
      translateNode(node.childNodes[i]);
    }
  }
}

// Функция для перевода содержимого узла
function translateNodeContent(node) {
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i];
    if (childNode.nodeType === Node.TEXT_NODE) {
      // Если дочерний узел является текстовым узлом, перевести его содержимое
      childNode.textContent = translateText(childNode.textContent);
    } else if (childNode.nodeType === Node.ELEMENT_NODE) {
      // Если дочерний узел является элементом, вызвать перевод его содержимого
      translateNodeContent(childNode);
    }
  }
}

// Функция для наблюдения за изменениями в дереве DOM
function observeChanges() {
  const targetNode = document.getElementById("__next");

  const observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          const addedNode = mutation.addedNodes[i];
          if (!addedNode.__translated) {
            translateNode(addedNode);
            addedNode.__translated = true;
          }
        }
      } else if (mutation.type === "characterData") {
        if (!mutation.target.__translated) {
          translateNode(mutation.target);
          mutation.target.__translated = true;
        }
      }
    }
  });

  const config = { childList: true, subtree: true, characterData: true };
  observer.observe(targetNode, config);
}

// Функция для инициализации перевода
function initTranslation() {
  // Перевести содержимое документа
  translateNode(document.documentElement);
  // Наблюдать за изменениями в дереве DOM
  observeChanges();
}

// Событие "load" для запуска перевода после загрузки страницы
window.addEventListener("load", function () {
  initTranslation();
});
