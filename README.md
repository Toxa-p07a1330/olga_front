package.json - список требуемых пакетов
package-lock.json - список установленных пакетов
.idea - настройки моей среды. Не трогай
public - шаблонные страницы и информаиця для поисковиков + фавиконы. Не трогай
src - папка с исходниками

src 
  setupTest - настройка тестов. Тестов тут не.э Не трогай
  reportWebVitals.js - вообще хз что это. Генерированный файл. Не тргай
  logo.svg - стандартное лого. Не нужен
  index.js - скрипт подстановки JSX в HTML. 
  index css - общие стили проекта

  static - ывсе картинки проека
  rounting - соответсвие компонента и URL пути
    опциональный-сайд - определяет, является ли страница контентной и если да - для нее отображается второй роутер и боковое меню. Иначе - это страница ошибки
    контент-роутер - определяет, какая контентная страница соответсвует данному урлу
  app - компоновка основных компонентов (модалки. роутера и обработки ошибок)
    style.module.scss - стли, применяемые только для текущего компонента и для его потомков (в текущем случае для аппа). Справедливо для всех файлов с расшрением модуль цсс
  компоненты - список малых и (обычно) переиспользуемых компонентов. Например - модалка. Сключает в себя боковое меню, модалку, алерт и обертку ютуба
  logic - включает в себя обработку ошибок и вспомогательные утилиты
    error-catcher - обработчик ошибок.
    field-converter - утлита для генерации форм в профиле
    getfAQ - заглушка для получения факов  с сервера
    helpers - ожидание указанного таймаута
    showModal - функциоя показа модалки

  pages - списо страниц. 
    contentfulPage - обертка над всемми контентными страницами.
    для остальных страниц - название папки соответвует имени


Общие комментарии
style.module.scss - список стилей, которые применяются к компоненту, лежащих в этой же папке
useState - возвращает массив из двух элементов. Геттер и сеттер. Первое значение НЕЛЬЗЯ менять напрямую, только через функцию. При изменении происзодит перерисовка старницы. ПРимер - src/pages/sign-inup/sign-inup.jsx
useEffect - функция, указанная, как первый аргумент, вызывается только если одна из переменных в мессиве, переданных как второй аргумент, изменила значение. Пустой массив вызывается 1 раз. Триггерит ререндер
SingleAnswerCard.jsx - компонент, используемый только в факах и не вынесенный в компоненты
