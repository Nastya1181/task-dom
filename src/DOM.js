/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let element = document.createElement(tag);
        element.innerHTML = content;
        let body = document.getElementsByTagName('body')[0];
        body.append(element);
    }
}

/*
Создайте дерево вложенных тегов DIV.
Каждый узел дерева должен содержать childrenCount узлов.
Глубина дерева задается параметром level.
Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let root = document.createElement('div');
    root.classList.add('item_1');
    generateTreeRecursive(root, childrenCount, level - 1, 1);
    return root;
}

function generateTreeRecursive(element, childrenCount, level, currLevel) {
    currLevel++;
    for (let i = 0; i < childrenCount; i++) {
        if (level === 0) return;
        let child = document.createElement('div');
        child.classList.add(`item_${currLevel}`);
        element.append(child);
        generateTreeRecursive(child, childrenCount, level - 1, currLevel);
    }
}

/*
Используйте функцию для создания дерева тегов DIV из предыдущего задания.
Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
которые находились внутри переписанных тегов.
Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let itemsToReplace = tree.querySelectorAll('.item_2');
    for (let itemToReplace of itemsToReplace) {
        let newItem = document.createElement('section');
        newItem.innerHTML = itemToReplace.innerHTML;
        newItem.classList.add('item_2');
        tree.replaceChild(newItem, itemToReplace);
    }
    return tree;
}
