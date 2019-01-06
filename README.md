# React-Redux-big-array-filters


Тестовое задание на React/Redux генерируются массивы по умолчанию 10000 элементов и создан фильтр по нескольким массивам по ключам и значениям

**Запуск проекта:** 

```npm install (yarn)``` 

```npm run start (yarn start)``` 

Проект запустится на http://localhost:3000/


**Текст задания:**

**React + Redux**

Генерируется массив объектов { label, value }, длиной N ( 10000 по умолчанию )
элементов.
Реализовать механизм вывода данных в список любым удобным способом
(использование готовых компонент запрещено).
Реализовать следующую функциональность для списка:
1. Добавление элементов в список
2. Удаление элементов из списка
3. Редактирование элемента в списке
4. Поле фильтрации списка (по label и value)
5. Сортировка списка по полю label (как в порядке возрастания, так и
убывания)
Обработка массива данных
1. Реализовать генератор массива длиной k (10000 по умолчанию)
элементов. Элементами данного массива являются объекты,
содержащие от 1 до 10 генерируемых полей [{ randomField1: string, … ,
randomField8: string}]. Для генерации имен полей использовать массив
длиной 15 элементов, содержащий возможные имена.
2. Реализовать чистую функцию filter, которая принимает произвольное
количество массивов (из пункта 1) в качестве аргументов функции.
Результатом работы фильтра должен быть массив объектов, в которых
хотя бы один элемент имеет совпадение с указанной строкой
фильтрации. Фильтрация может проходить как по всем полям объекта,
так и по определенному полю. В последнем случае имя поля тоже
передаётся в качестве параметра.
