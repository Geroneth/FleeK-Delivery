// Упрощенные данные для примера
const dishes = [
    {id: 1, title: "Стейк", price: 350, calories: 450, image: "food1.jpg"},
    {id: 2, title: "Салат", price: 180, calories: 320, image: "food2.jpg"}
];

function renderMenu() {
    const menuSection = document.getElementById('menu');
    dishes.forEach(dish => {
        menuSection.innerHTML += `
            <div class="food-card">
                <h3>${dish.title}</h3>
                <p>Цена: ${dish.price} грн</p>
                <button onclick="orderFood(${dish.id})">Заказать</button>
            </div>
        `;
    });
}

// Запускаем при загрузке
window.onload = function() {
    renderMenu();
};
