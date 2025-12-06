// Desktop sort popover
const desktopSortButton = document.getElementById('desktopSortButton');
const desktopSortPopover = document.getElementById('desktopSortPopover');

if (desktopSortButton && desktopSortPopover) {
    desktopSortButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // Закрываем popover фильтров при открытии сортировки
        const desktopFilterPopover = document.getElementById('desktopFilterPopover');
        if (desktopFilterPopover && desktopFilterPopover.classList.contains('active')) {
            desktopFilterPopover.classList.remove('active');
        }
        desktopSortPopover.classList.toggle('active');
    });
    
    // Закрытие при клике вне popover
    document.addEventListener('click', function(e) {
        if (desktopSortPopover && desktopSortPopover.classList.contains('active')) {
            if (!desktopSortPopover.contains(e.target) && !desktopSortButton.contains(e.target)) {
                desktopSortPopover.classList.remove('active');
            }
        }
    });
    
    // Обработка клика на опции сортировки
    const desktopSortOptions = desktopSortPopover.querySelectorAll('.sort-option');
    desktopSortOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем активный класс у всех опций в той же группе
            const parent = this.closest('.sort-options, .sort-direction');
            if (parent) {
                parent.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('active'));
            }
            // Добавляем активный класс к выбранной опции
            this.classList.add('active');
        });
    });
}

// Управление мобильным popover
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobilePopover = document.getElementById('mobilePopover');
const sortButton = document.getElementById('sortButton');
const sortModal = document.getElementById('sortModal');
// Определяем переменные для фильтров заранее, чтобы использовать в обработчиках
const filterButton = document.getElementById('filterButton');
const filterTrigger = document.getElementById('filterTrigger');
const filterPopover = document.getElementById('filterPopover');
// Определяем переменную для кнопки выбора на странице списков
const selectButton = document.getElementById('selectButton');

if (mobileMenuToggle && mobilePopover) {
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mobilePopover.classList.toggle('active');
        // Закрываем модальное окно сортировки при открытии popover
        if (sortModal) {
            sortModal.classList.remove('active');
        }
    });
    
    // Закрытие при клике вне popover
    document.addEventListener('click', function(e) {
        // Не закрываем если клик на кнопки фильтров, сортировки или выбора
        const isFilterButton = filterButton && filterButton.contains(e.target);
        const isSortButton = sortButton && sortButton.contains(e.target);
        const isSelectButton = selectButton && selectButton.contains(e.target);
        if (!mobilePopover.contains(e.target) && !mobileMenuToggle.contains(e.target) && !isFilterButton && !isSortButton && !isSelectButton) {
            mobilePopover.classList.remove('active');
        }
    });
    
    // Обработка клика на кнопки popover
    const popoverItems = mobilePopover.querySelectorAll('.popover-item');
    popoverItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Если это кнопка фильтров, сортировки или выбора, не закрываем popover
            if (item.id === 'filterButton' || item.id === 'sortButton' || item.id === 'selectButton') {
                // Не закрываем, обработчик кнопки сработает отдельно
                return;
            }
            // Для остальных кнопок закрываем popover
            mobilePopover.classList.remove('active');
        });
    });
}

// Обработчик кнопки "Выбрать" на странице списков
if (selectButton) {
    selectButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // TODO: Добавить логику выбора списков
        // Пока просто закрываем popover
        if (mobilePopover) {
            mobilePopover.classList.remove('active');
        }
    });
}

// Управление popover сортировки
const sortTrigger = document.getElementById('sortTrigger');
const sortPopover = document.getElementById('sortPopover');
if (sortButton && sortTrigger && sortPopover && mobilePopover) {
    sortButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // Закрываем popover фильтров при открытии сортировки
        if (filterTrigger && filterTrigger.classList.contains('is-open')) {
            filterTrigger.classList.remove('is-open');
            mobilePopover.classList.remove('filter-open');
        }
        const isOpen = sortTrigger.classList.contains('is-open');
        
        if (isOpen) {
            // Закрываем - схлопываем обратно
            sortTrigger.classList.remove('is-open');
            mobilePopover.classList.remove('sort-open');
        } else {
            // Открываем - трансформируем
            sortTrigger.classList.add('is-open');
            mobilePopover.classList.add('sort-open');
        }
    });
    
    // Закрытие при клике вне popover
    document.addEventListener('click', function(e) {
        if (sortTrigger && sortTrigger.classList.contains('is-open')) {
            if (!sortPopover.contains(e.target) && !sortButton.contains(e.target) && !mobilePopover.contains(e.target)) {
                sortTrigger.classList.remove('is-open');
                mobilePopover.classList.remove('sort-open');
            }
        }
    });
    
    // Закрытие при клике на опции сортировки
    const sortOptions = sortPopover.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем активный класс у всех опций в той же группе
            const parent = this.closest('.sort-options, .sort-direction');
            if (parent) {
                parent.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('active'));
            }
            // Добавляем активный класс к выбранной опции
            this.classList.add('active');
        });
    });
}

// Desktop filter popover - копия кода сортировки
const desktopFilterButton = document.getElementById('desktopFilterButton');
const desktopFilterPopover = document.getElementById('desktopFilterPopover');

if (desktopFilterButton && desktopFilterPopover) {
    desktopFilterButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // Закрываем popover сортировки при открытии фильтров
        if (desktopSortPopover && desktopSortPopover.classList.contains('active')) {
            desktopSortPopover.classList.remove('active');
        }
        desktopFilterPopover.classList.toggle('active');
    });
    
    // Закрытие при клике вне popover
    document.addEventListener('click', function(e) {
        if (desktopFilterPopover && desktopFilterPopover.classList.contains('active')) {
            if (!desktopFilterPopover.contains(e.target) && !desktopFilterButton.contains(e.target)) {
                desktopFilterPopover.classList.remove('active');
            }
        }
    });
    
    // Обработка клика на опции фильтров
    const desktopFilterOptions = desktopFilterPopover.querySelectorAll('.sort-option');
    desktopFilterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем активный класс у всех опций в той же группе
            const parent = this.closest('.sort-options, .sort-direction, .filter-section');
            if (parent) {
                parent.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('active'));
            }
            // Добавляем активный класс к выбранной опции
            this.classList.add('active');
        });
    });
}

// Управление popover фильтров (мобильная версия) - копия кода сортировки
if (filterButton && filterTrigger && filterPopover && mobilePopover) {
    filterButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // Закрываем popover сортировки при открытии фильтров
        if (sortTrigger && sortTrigger.classList.contains('is-open')) {
            sortTrigger.classList.remove('is-open');
            mobilePopover.classList.remove('sort-open');
        }
        const isOpen = filterTrigger.classList.contains('is-open');
        
        if (isOpen) {
            // Закрываем - схлопываем обратно
            filterTrigger.classList.remove('is-open');
            mobilePopover.classList.remove('filter-open');
        } else {
            // Открываем - трансформируем
            filterTrigger.classList.add('is-open');
            mobilePopover.classList.add('filter-open');
        }
    });
    
    // Закрытие при клике вне popover
    document.addEventListener('click', function(e) {
        if (filterTrigger && filterTrigger.classList.contains('is-open')) {
            if (!filterPopover.contains(e.target) && !filterButton.contains(e.target) && !mobilePopover.contains(e.target)) {
                filterTrigger.classList.remove('is-open');
                mobilePopover.classList.remove('filter-open');
            }
        }
    });
    
    // Закрытие при клике на опции фильтров
    const filterOptions = filterPopover.querySelectorAll('.sort-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем активный класс у всех опций в той же группе
            const parent = this.closest('.sort-options, .sort-direction, .filter-section');
            if (parent) {
                parent.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('active'));
            }
            // Добавляем активный класс к выбранной опции
            this.classList.add('active');
        });
    });
}

// Управление кнопками действий на странице карточки фильма
const actionButtons = document.querySelectorAll('.action-btn');
if (actionButtons.length > 0) {
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Пропускаем кнопку "Добавить в список" - она открывает модальное окно
            if (this.classList.contains('add-to-list-btn')) {
                return;
            }
            
            // Для остальных кнопок просто переключаем active
            this.classList.toggle('active');
        });
    });
}

// ===== МОДАЛЬНОЕ ОКНО ВЫБОРА СПИСКА =====
(function initAddToListModal() {
    const addToListBtn = document.querySelector('.add-to-list-btn');
    const addToListModal = document.getElementById('addToListModal');
    const addToListModalClose = document.getElementById('addToListModalClose');
    const addToListModalOverlay = addToListModal?.querySelector('.add-to-list-modal-overlay');
    const addToListItems = document.getElementById('addToListItems');
    const addToListEmpty = document.getElementById('addToListEmpty');

    if (!addToListBtn || !addToListModal) return; // Работает только на странице карточки фильма

    // Функция для получения списков из localStorage
    function getListsFromStorage() {
        try {
            const stored = localStorage.getItem('mm_user_lists');
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.error('Ошибка при чтении списков из localStorage:', e);
        }
        return [];
    }

    // Функция для сохранения списков в localStorage
    function saveListsToStorage(lists) {
        try {
            localStorage.setItem('mm_user_lists', JSON.stringify(lists));
        } catch (e) {
            console.error('Ошибка при сохранении списков в localStorage:', e);
        }
    }

    // Функция для получения информации о текущем фильме/сериале
    function getCurrentMovieInfo() {
        const titleEl = document.querySelector('.movie-title');
        const title = titleEl ? titleEl.textContent.trim() : '';
        
        // Пытаемся получить дополнительную информацию
        const posterImg = document.querySelector('.poster-image');
        const posterUrl = posterImg ? posterImg.src : '';
        
        // Определяем тип контента (фильм или сериал)
        const posterTag = document.querySelector('.poster-tag');
        const isSeries = posterTag && posterTag.textContent.includes('СЕРИАЛ');
        
        return {
            id: `movie_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            title: title,
            posterUrl: posterUrl,
            type: isSeries ? 'series' : 'movie',
            addedAt: new Date().toISOString()
        };
    }

    // Функция для загрузки и отображения списков
    function loadLists() {
        const lists = getListsFromStorage();
        
        if (lists.length === 0) {
            addToListEmpty.style.display = 'block';
            addToListItems.style.display = 'none';
            return;
        }

        addToListEmpty.style.display = 'none';
        addToListItems.style.display = 'flex';
        addToListItems.innerHTML = '';

        const currentMovie = getCurrentMovieInfo();

        lists.forEach((list, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'add-to-list-item';
            
            // Проверяем, есть ли уже этот фильм в списке
            const isInList = list.items && list.items.some(item => item.title === currentMovie.title);
            if (isInList) {
                listItem.classList.add('selected');
            }

            listItem.innerHTML = `
                <div class="add-to-list-item-name">${list.name || 'Без названия'}</div>
                <div class="add-to-list-item-count">${list.items ? list.items.length : 0} ${getItemCountText(list.items ? list.items.length : 0)}</div>
                <div class="add-to-list-item-check">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            `;

            listItem.addEventListener('click', function() {
                // Получаем актуальное состояние списка
                const updatedLists = getListsFromStorage();
                const updatedList = updatedLists.find(l => l.id === list.id);
                if (!updatedList) return;

                const currentlyInList = updatedList.items && updatedList.items.some(item => item.title === currentMovie.title);

                if (currentlyInList) {
                    // Удаляем из списка
                    removeMovieFromList(list.id, currentMovie);
                    listItem.classList.remove('selected');
                } else {
                    // Добавляем в список
                    addMovieToList(list.id, currentMovie);
                    listItem.classList.add('selected');
                }
                
                // Обновляем счетчик
                const finalLists = getListsFromStorage();
                const finalList = finalLists.find(l => l.id === list.id);
                if (finalList) {
                    const countEl = listItem.querySelector('.add-to-list-item-count');
                    const count = finalList.items ? finalList.items.length : 0;
                    countEl.textContent = `${count} ${getItemCountText(count)}`;
                }
            });

            addToListItems.appendChild(listItem);
        });
    }

    // Функция для получения правильной формы слова "элемент"
    function getItemCountText(count) {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;
        
        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return 'элементов';
        }
        if (lastDigit === 1) {
            return 'элемент';
        }
        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'элемента';
        }
        return 'элементов';
    }

    // Функция для добавления фильма в список
    function addMovieToList(listId, movieInfo) {
        const lists = getListsFromStorage();
        const listIndex = lists.findIndex(l => l.id === listId);
        
        if (listIndex === -1) return;

        if (!lists[listIndex].items) {
            lists[listIndex].items = [];
        }

        // Проверяем, нет ли уже такого фильма
        const exists = lists[listIndex].items.some(item => item.title === movieInfo.title);
        if (!exists) {
            lists[listIndex].items.push(movieInfo);
            saveListsToStorage(lists);
        }
    }

    // Функция для удаления фильма из списка
    function removeMovieFromList(listId, movieInfo) {
        const lists = getListsFromStorage();
        const listIndex = lists.findIndex(l => l.id === listId);
        
        if (listIndex === -1) return;

        if (lists[listIndex].items) {
            lists[listIndex].items = lists[listIndex].items.filter(
                item => item.title !== movieInfo.title
            );
            saveListsToStorage(lists);
        }
    }

    // Функция для открытия модального окна
    function openModal() {
        loadLists();
        addToListModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Функция для закрытия модального окна
    function closeModal() {
        addToListModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Инициализация списков при первом запуске (если их нет)
    function initializeListsIfNeeded() {
        const lists = getListsFromStorage();
        if (lists.length === 0) {
            // Пытаемся получить списки из HTML страницы my-lists.html
            const listsFromHTML = getListsFromHTML();
            if (listsFromHTML.length > 0) {
                saveListsToStorage(listsFromHTML);
            } else {
                // Создаем демо-списки
                const demoLists = [
                    {
                        id: 'list_1',
                        name: 'Christmas Vibes',
                        items: [],
                        createdAt: new Date().toISOString()
                    }
                ];
                saveListsToStorage(demoLists);
            }
        }
    }

    // Функция для получения списков из HTML (со страницы my-lists.html)
    function getListsFromHTML() {
        const listsGrid = document.getElementById('listsGrid');
        if (!listsGrid) return [];

        const listCards = listsGrid.querySelectorAll('.list-card');
        const lists = [];

        listCards.forEach((card, index) => {
            const titleEl = card.querySelector('.list-card-title');
            const quantityEl = card.querySelector('.list-card-quantity');
            
            if (titleEl) {
                const name = titleEl.textContent.trim();
                const quantityText = quantityEl ? quantityEl.textContent.trim() : '';
                const quantityMatch = quantityText.match(/\d+/);
                const quantity = quantityMatch ? parseInt(quantityMatch[0], 10) : 0;

                lists.push({
                    id: `list_${index + 1}_${Date.now()}`,
                    name: name,
                    items: [],
                    createdAt: new Date().toISOString()
                });
            }
        });

        return lists;
    }

    // Обработчик клика на кнопку "Добавить в список"
    addToListBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        initializeListsIfNeeded();
        openModal();
    });

    // Обработчик закрытия модального окна
    if (addToListModalClose) {
        addToListModalClose.addEventListener('click', closeModal);
    }

    if (addToListModalOverlay) {
        addToListModalOverlay.addEventListener('click', closeModal);
    }

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && addToListModal.classList.contains('active')) {
            closeModal();
        }
    });
})();

// Плавное перемещение индикатора активного элемента в мобильной навигации
function updateMobileNavIndicator(forceAnimation = false) {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;
    
    // Проверяем, находимся ли мы в мобильной версии
    if (window.innerWidth > 480) {
        sidebarNav.removeAttribute('data-active-index');
        return;
    }
    
    const navItems = sidebarNav.querySelectorAll('.nav-item');
    let activeIndex = -1;
    
    navItems.forEach((item, index) => {
        if (item.classList.contains('active')) {
            activeIndex = index;
        }
    });
    
    if (activeIndex !== -1) {
        const currentIndex = sidebarNav.getAttribute('data-active-index');
        const newIndex = String(activeIndex);
        
        // Если индекс не изменился и это не принудительная анимация, просто обновляем без анимации
        if (currentIndex === newIndex && !forceAnimation) {
            // Индекс не изменился, просто обновляем без анимации
            return;
        }
        
        // Если нужно принудительно запустить анимацию (например, при загрузке страницы)
        if (forceAnimation || currentIndex === null) {
            // Временно устанавливаем противоположную позицию для запуска анимации
            const oppositeIndex = activeIndex === 0 ? '1' : '0';
            sidebarNav.setAttribute('data-active-index', oppositeIndex);
            
            // Принудительный рефлоу для применения изменений
            sidebarNav.offsetHeight;
            
            // Используем requestAnimationFrame для гарантии отрисовки перед анимацией
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Находим родительский sidebar и увеличиваем его z-index
                    const sidebar = sidebarNav.closest('.sidebar');
                    
                    // Сначала устанавливаем атрибут анимации для изменения фона
                    sidebarNav.setAttribute('data-animating', 'true');
                    
                    // Увеличиваем z-index sidebar при анимации
                    if (sidebar) {
                        sidebar.style.zIndex = '250';
                    }
                    
                    // Принудительный рефлоу для применения изменений фона
                    sidebarNav.offsetHeight;
                    
                    // Еще один frame, чтобы дать время для изменения фона
                    requestAnimationFrame(() => {
                        // Теперь анимируем к правильной позиции
                        sidebarNav.setAttribute('data-active-index', newIndex);
                        
                        // Убираем атрибут анимации и восстанавливаем z-index после завершения
                        setTimeout(() => {
                            sidebarNav.removeAttribute('data-animating');
                            if (sidebar) {
                                sidebar.style.zIndex = '';
                            }
                        }, 500); // Длительность анимации
                    });
                });
            });
        } else {
            // Индекс изменился - запускаем анимацию перемещения
            // Находим родительский sidebar и увеличиваем его z-index
            const sidebar = sidebarNav.closest('.sidebar');
            
            // Сначала устанавливаем атрибут анимации для изменения фона
            sidebarNav.setAttribute('data-animating', 'true');
            
            // Увеличиваем z-index sidebar при анимации
            if (sidebar) {
                sidebar.style.zIndex = '250';
            }
            
            // Принудительный рефлоу для применения изменений фона
            sidebarNav.offsetHeight;
            
            // Используем requestAnimationFrame для синхронизации
            requestAnimationFrame(() => {
                // Теперь обновляем позицию с анимацией увеличения высоты
                sidebarNav.setAttribute('data-active-index', newIndex);
                
                // Убираем атрибут анимации и восстанавливаем z-index после завершения
                setTimeout(() => {
                    sidebarNav.removeAttribute('data-animating');
                    if (sidebar) {
                        sidebar.style.zIndex = '';
                    }
                }, 500); // Длительность анимации
            });
        }
    } else {
        // Если активный элемент не найден, устанавливаем первый по умолчанию
        sidebarNav.setAttribute('data-active-index', '0');
    }
}

// Обновляем индикатор при загрузке страницы с принудительной анимацией
function initMobileNavIndicator() {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) {
        // Если элемент еще не загружен, повторяем попытку
        setTimeout(initMobileNavIndicator, 50);
        return;
    }
    
    // Проверяем, находимся ли мы в мобильной версии
    if (window.innerWidth > 480) {
        sidebarNav.removeAttribute('data-active-index');
        return;
    }
    
    // Находим активный элемент
    const navItems = sidebarNav.querySelectorAll('.nav-item');
    let activeIndex = -1;
    
    navItems.forEach((item, index) => {
        if (item.classList.contains('active')) {
            activeIndex = index;
        }
    });
    
    if (activeIndex === -1) {
        activeIndex = 0; // По умолчанию первый элемент
    }
    
    // Устанавливаем противоположную позицию для начального состояния
    const oppositeIndex = activeIndex === 0 ? '1' : '0';
    const targetIndex = String(activeIndex);
    
    // Принудительно удаляем атрибут, чтобы сбросить состояние
    sidebarNav.removeAttribute('data-active-index');
    
    // Добавляем класс для отключения transition
    sidebarNav.classList.add('no-transition');
    
    // Используем небольшую задержку для гарантии готовности DOM
    setTimeout(() => {
        // Устанавливаем противоположную позицию (начальное состояние) БЕЗ анимации
        sidebarNav.setAttribute('data-active-index', oppositeIndex);
        
        // Принудительный рефлоу для применения начальной позиции
        sidebarNav.offsetHeight;
        
        // Используем requestAnimationFrame для синхронизации с браузером
        requestAnimationFrame(() => {
            // Удаляем класс для включения анимации
            sidebarNav.classList.remove('no-transition');
            
            // Принудительный рефлоу для применения transition
            sidebarNav.offsetHeight;
            
            // Используем еще один requestAnimationFrame для гарантии, что transition активен
            requestAnimationFrame(() => {
                // Находим родительский sidebar и увеличиваем его z-index
                const sidebar = sidebarNav.closest('.sidebar');
                
                // Сначала устанавливаем атрибут анимации для увеличения высоты и прозрачности
                sidebarNav.setAttribute('data-animating', 'true');
                
                // Увеличиваем z-index sidebar при анимации
                if (sidebar) {
                    sidebar.style.zIndex = '250';
                }
                
                // Принудительный рефлоу для применения изменений фона
                sidebarNav.offsetHeight;
                
                // Еще один frame, чтобы дать время для изменения фона
                requestAnimationFrame(() => {
                    // Теперь анимируем к правильной позиции
                    sidebarNav.setAttribute('data-active-index', targetIndex);
                    
                    // Убираем атрибут анимации и восстанавливаем z-index после завершения
                    setTimeout(() => {
                        sidebarNav.removeAttribute('data-animating');
                        if (sidebar) {
                            sidebar.style.zIndex = '';
                        }
                    }, 500); // Длительность анимации
                });
            });
        });
    }, 50);
}

// Инициализация при загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavIndicator);
} else {
    // DOM уже загружен
    initMobileNavIndicator();
}

// Также инициализируем при возврате из кэша браузера
window.addEventListener('pageshow', function(event) {
    // Если страница загружена из кэша (back/forward cache)
    if (event.persisted) {
        initMobileNavIndicator();
    }
});

// Обновляем индикатор при изменении размера окна
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        updateMobileNavIndicator();
    }, 100);
});

// Функция для анимации расширения при клике на уже активную вкладку
function animateActiveNavExpansion(navItem) {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;
    
    // Проверяем, находимся ли мы в мобильной версии
    if (window.innerWidth > 480) return;
    
    // Находим родительский sidebar
    const sidebar = sidebarNav.closest('.sidebar');
    
    // Устанавливаем атрибут для анимации расширения
    sidebarNav.setAttribute('data-expanding', 'true');
    
    // Увеличиваем z-index sidebar при анимации
    if (sidebar) {
        sidebar.style.zIndex = '250';
    }
    
    // Принудительный рефлоу
    sidebarNav.offsetHeight;
    
    // Убираем атрибут после завершения анимации
    setTimeout(() => {
        sidebarNav.removeAttribute('data-expanding');
        if (sidebar) {
            sidebar.style.zIndex = '';
        }
    }, 500); // Длительность анимации
}

// Храним состояние поиска глобально для доступа из других обработчиков
let searchState = {
    originalNavWidth: null
};

// Обновляем индикатор при клике на элементы навигации
document.addEventListener('click', function(e) {
    const navItem = e.target.closest('.sidebar-nav .nav-item');
    if (navItem) {
        // Проверяем, активен ли поиск
        const mobileSearchBtn = document.getElementById('mobileSearchBtn');
        const isSearchActive = mobileSearchBtn && mobileSearchBtn.classList.contains('search-active');
        
        // Проверяем, является ли кликнутый элемент уже активным
        const isAlreadyActive = navItem.classList.contains('active');
        
        if (isAlreadyActive) {
            // Если поиск активен и клик на активный элемент, закрываем поиск
            if (isSearchActive && window.innerWidth <= 480) {
                e.preventDefault(); // Предотвращаем переход на страницу
                e.stopPropagation();
                
                // Закрываем поиск
                mobileSearchBtn.classList.remove('search-active');
                
                // Очищаем сохраненную ширину
                searchState.originalNavWidth = null;
                
                // Убираем фокус с input если есть
                const mobileSearchInput = document.getElementById('mobileSearchInput');
                if (mobileSearchInput) {
                    mobileSearchInput.blur();
                }
                
                return;
            }
            
            // Если элемент уже активен и поиск не активен, запускаем анимацию расширения
            e.preventDefault(); // Предотвращаем переход на страницу
            animateActiveNavExpansion(navItem);
        } else {
            // Если элемент не активен, выполняем обычную логику переключения
            // Убираем active у всех элементов
            const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            // Добавляем active к clicked элементу
            navItem.classList.add('active');
            // Обновляем индикатор без принудительной анимации (так как это клик)
            setTimeout(() => {
                updateMobileNavIndicator(false);
            }, 10);
            
            // Если поиск активен при переключении на другой элемент, закрываем поиск
            if (isSearchActive && window.innerWidth <= 480) {
                mobileSearchBtn.classList.remove('search-active');
                
                // Очищаем сохраненную ширину
                searchState.originalNavWidth = null;
                
                // Убираем фокус с input если есть
                const mobileSearchInput = document.getElementById('mobileSearchInput');
                if (mobileSearchInput) {
                    mobileSearchInput.blur();
                }
            }
        }
    }
});

// Обработчик клика на кнопку мобильного поиска
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
const mobileSearchInput = document.getElementById('mobileSearchInput');

if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener('click', function(e) {
        // Если клик был на input, не обрабатываем здесь
        if (e.target === mobileSearchInput) {
            return;
        }
        
        e.stopPropagation();
        
        // Проверяем, находимся ли мы в мобильной версии
        if (window.innerWidth > 480) {
            return; // Не обрабатываем на десктопе
        }
        
        const sidebarNav = document.querySelector('.sidebar-nav');
        if (!sidebarNav) return;
        
        // Переключаем состояние поиска
        const isActive = mobileSearchBtn.classList.contains('search-active');
        
        if (isActive) {
            // Если поиск уже активен, фокусируемся на input (не закрываем)
            if (mobileSearchInput) {
                // Фокусируемся сразу, без задержки
                mobileSearchInput.focus();
            }
        } else {
            // Сохраняем исходную ширину sidebar-nav перед трансформацией
            if (!searchState.originalNavWidth) {
                const navRect = sidebarNav.getBoundingClientRect();
                searchState.originalNavWidth = navRect.width;
                // Применяем сохраненную ширину к mobile-search-btn
                mobileSearchBtn.style.setProperty('--original-nav-width', searchState.originalNavWidth + 'px');
            }
            
            // Открываем поиск - трансформируем элементы
            mobileSearchBtn.classList.add('search-active');
            
            // Фокусируемся на input после завершения анимации
            if (mobileSearchInput) {
                setTimeout(() => {
                    mobileSearchInput.focus();
                }, 500); // Длительность анимации
            }
        }
    });
    
    // Предотвращаем закрытие поиска при клике на input
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // Предотвращаем закрытие поиска при фокусе на input
        mobileSearchInput.addEventListener('focus', function(e) {
            e.stopPropagation();
        });
        
        // Закрытие поиска при нажатии Escape
        mobileSearchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileSearchBtn.classList.remove('search-active');
                searchState.originalNavWidth = null;
                mobileSearchInput.blur();
                e.stopPropagation();
            }
        });
    }
    
    // Закрытие поиска при клике вне области
    document.addEventListener('click', function(e) {
        if (mobileSearchBtn.classList.contains('search-active')) {
            // Не закрываем, если клик на саму кнопку поиска, на input или на sidebar-nav
            const isClickOnSearch = mobileSearchBtn.contains(e.target);
            const isClickOnSidebarNav = e.target.closest('.sidebar-nav');
            const isClickOnInput = e.target === mobileSearchInput;
            
            // Закрываем только если клик вне этих элементов
            if (!isClickOnSearch && !isClickOnSidebarNav && !isClickOnInput) {
                mobileSearchBtn.classList.remove('search-active');
                searchState.originalNavWidth = null;
                // Убираем фокус с input при закрытии
                if (mobileSearchInput) {
                    mobileSearchInput.blur();
                }
            }
        }
    });
    
    // Сброс состояния при изменении размера окна
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 480) {
                mobileSearchBtn.classList.remove('search-active');
                searchState.originalNavWidth = null;
                if (mobileSearchInput) {
                    mobileSearchInput.blur();
                }
            }
        }, 100);
    });
}

// ===== Интерактивная пользовательская оценка в rating-display =====

function setGroupRating(displays, rating, groupId, save = true) {
    if (!displays || !displays.length) return;

    displays.forEach(display => {
        const popcornContainer = display.querySelector('.popcorn-rating');
        if (!popcornContainer) return;

        const icons = popcornContainer.querySelectorAll('.popcorn-icon');
        icons.forEach(icon => {
            const value = parseInt(icon.dataset.value || '0', 10);
            if (!value) return;

            if (value <= rating) {
                icon.setAttribute('data-active', 'true');
            } else {
                icon.setAttribute('data-active', 'false');
            }
        });

        const valueLabel = display.querySelector('.user-rating-value');
        if (valueLabel) {
            valueLabel.textContent = String(rating);
        }

        // Сохраняем значение рейтинга на контейнере для стилизации ICONIC-бейджа
        display.setAttribute('data-user-rating', String(rating));
    });

    if (save && window.localStorage) {
        try {
            localStorage.setItem('mm_user_rating_' + groupId, String(rating));
        } catch (e) {
            // Игнорируем ошибки доступа к localStorage
        }
    }
}

function initUserRatings() {
    const ratingDisplays = document.querySelectorAll('.rating-display[data-rating-id]');
    if (!ratingDisplays.length) return;

    // Группируем rating-display по идентификатору (один и тот же рейтинг на десктопе и мобилке)
    const groups = {};

    ratingDisplays.forEach(display => {
        const groupId = display.getAttribute('data-rating-id') || 'default';
        if (!groups[groupId]) {
            groups[groupId] = [];
        }
        groups[groupId].push(display);

        const popcornContainer = display.querySelector('.popcorn-rating');
        if (!popcornContainer) return;

        popcornContainer.classList.add('interactive');

        const icons = popcornContainer.querySelectorAll('.popcorn-icon');
        icons.forEach((icon, index) => {
            // Присваиваем порядковый номер как значение рейтинга
            icon.dataset.value = String(index + 1);

            icon.addEventListener('click', function() {
                const rating = index + 1;
                setGroupRating(groups[groupId], rating, groupId, true);
            });
        });

        // ICONIC-бейдж как 6‑я, максимальная оценка
        const iconicBadge = display.querySelector('.iconic-badge');
        if (iconicBadge) {
            iconicBadge.addEventListener('click', function() {
                const rating = 6;
                setGroupRating(groups[groupId], rating, groupId, true);
            });
        }
    });

    // Восстанавливаем сохранённый рейтинг из localStorage (если он есть)
    Object.keys(groups).forEach(groupId => {
        if (!window.localStorage) return;
        try {
            const stored = localStorage.getItem('mm_user_rating_' + groupId);
            const rating = stored ? parseInt(stored, 10) : NaN;
            if (!isNaN(rating) && rating > 0) {
                setGroupRating(groups[groupId], rating, groupId, false);
            }
        } catch (e) {
            // Если localStorage недоступен, просто пропускаем восстановление
        }
    });
}

// Инициализация пользовательского рейтинга после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUserRatings);
} else {
    initUserRatings();
}

// ===== COOKIE BANNER =====
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAcceptBtn');

    if (!banner || !acceptBtn) return;

    let accepted = false;
    try {
        accepted = window.localStorage && localStorage.getItem('mm_cookies_accepted') === 'true';
    } catch (e) {
        accepted = false;
    }

    if (!accepted) {
        banner.classList.add('cookie-banner--visible');
    }

    acceptBtn.addEventListener('click', function () {
        try {
            if (window.localStorage) {
                localStorage.setItem('mm_cookies_accepted', 'true');
            }
        } catch (e) {
            // игнорируем ошибки доступа к localStorage
        }
        banner.classList.remove('cookie-banner--visible');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieBanner);
} else {
    initCookieBanner();
}

// ===== Редактирование описания списка на странице list-card =====
(function initListCardDescriptionEditor() {
    const descriptionSection = document.querySelector('.list-card-description');
    if (!descriptionSection) return; // запускаем только на странице карточки списка

    const textEl = descriptionSection.querySelector('.list-card-description-text');
    const editBtn = descriptionSection.querySelector('.list-card-description-edit');
    if (!textEl || !editBtn) return;

    let isEditing = false;

    editBtn.addEventListener('click', () => {
        if (isEditing) return;
        isEditing = true;

        const currentText = textEl.textContent || '';

        // Создаём textarea вместо текста
        const textarea = document.createElement('textarea');
        textarea.className = 'list-card-description-input';
        textarea.value = currentText.trim();

        // Базовые стили через inline, остальное — через CSS по классу
        textarea.rows = 3;

        // Скрываем исходный текст и вставляем textarea
        textEl.style.display = 'none';
        descriptionSection.insertBefore(textarea, editBtn);
        textarea.focus();
        textarea.selectionStart = textarea.value.length;

        const finishEditing = (save) => {
            if (!isEditing) return;
            if (save) {
                const newText = textarea.value.trim();
                if (newText.length > 0) {
                    textEl.textContent = newText;
                }
            }
            textarea.remove();
            textEl.style.display = '';
            isEditing = false;
        };

        textarea.addEventListener('blur', () => finishEditing(true));

        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                finishEditing(true);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                finishEditing(false);
            }
        });
    });
})();

// ===== Поповер профиля (кнопка "Выйти") =====
(function initProfilePopover() {
    const profileMenus = document.querySelectorAll('.profile-menu');
    const mobileProfileAvatar = document.getElementById('mobileProfileAvatar');
    const mobileMenuToggleBtn = document.getElementById('mobileMenuToggle');
    if (!profileMenus.length && !mobileProfileAvatar && !mobileMenuToggleBtn) return;

    function closeAllProfilePopovers() {
        document.querySelectorAll('.profile-popover.active').forEach(p => {
            p.classList.remove('active');
        });
    }

    // Инициализируем поповер для sidebar-профиля
    profileMenus.forEach(menuBtn => {
        const userProfile = menuBtn.closest('.user-profile');
        const popover = userProfile ? userProfile.querySelector('[data-profile-popover]') : null;
        if (!popover) return;

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = popover.classList.contains('active');
            closeAllProfilePopovers();
            if (!isOpen) {
                popover.classList.add('active');
            }
        });

        const logoutBtn = popover.querySelector('[data-logout-button]');
        const changeAvatarBtn = popover.querySelector('[data-change-avatar-button]');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                popover.classList.remove('active');
                // Здесь можно добавить реальную логику выхода, сейчас просто заглушка
                console.log('Logout clicked');
            });
        }

        if (changeAvatarBtn) {
            changeAvatarBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                popover.classList.remove('active');
                // Заглушка под смену аватарки
                console.log('Change avatar clicked');
            });
        }
    });

    // Поповер для мобильного аватара в шапке каталога
    if (mobileProfileAvatar) {
        const mobilePopover = document.querySelector('[data-mobile-profile-popover]');
        if (mobilePopover) {
            const logoutBtn = mobilePopover.querySelector('[data-logout-button]');
            const changeAvatarBtn = mobilePopover.querySelector('[data-change-avatar-button]');

            mobileProfileAvatar.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = mobilePopover.classList.contains('active');
                // При открытии аватара всегда закрываем мобильное меню (mm-popover-main)
                if (typeof mobilePopover !== 'undefined' && window.mobilePopover) {
                    window.mobilePopover.classList.remove('active');
                }
                closeAllProfilePopovers();
                if (!isOpen) {
                    mobilePopover.classList.add('active');
                }
            });

            if (logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    mobilePopover.classList.remove('active');
                    console.log('Logout clicked');
                });
            }

            if (changeAvatarBtn) {
                changeAvatarBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    mobilePopover.classList.remove('active');
                    console.log('Change avatar clicked');
                });
            }
        }
    }

    // При нажатии на mobile-menu-toggle тоже закрываем поповеры профиля
    if (mobileMenuToggleBtn) {
        mobileMenuToggleBtn.addEventListener('click', () => {
            closeAllProfilePopovers();
        });
    }

    document.addEventListener('click', (e) => {
        // Закрываем поповер, если клик вне блока профиля / поповера / мобильного аватара
        const isProfileArea = e.target.closest('.user-profile');
        const isMobileAvatar = e.target.closest('.mobile-profile-avatar');
        const isProfilePopover = e.target.closest('.profile-popover');
        if (!isProfileArea && !isMobileAvatar && !isProfilePopover) {
            closeAllProfilePopovers();
        }
    });
})();

// ===== Редактирование названия списка на странице "Мои списки" =====
(function initListTitleEditor() {
    const listsGrid = document.getElementById('listsGrid');
    if (!listsGrid) return; // только на my-lists.html

    listsGrid.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.list-action-btn.edit-btn');
        if (!editBtn) return;

        e.preventDefault();
        e.stopPropagation();

        const header = editBtn.closest('.list-card-header');
        if (!header) return;

        const titleEl = header.querySelector('.list-card-title');
        if (!titleEl) return;

        // Не создаем второе поле, если уже редактируем
        const existingInput = header.querySelector('.list-card-title-input');
        if (existingInput) {
            existingInput.focus();
            existingInput.selectionStart = existingInput.value.length;
            return;
        }

        const currentText = titleEl.textContent || '';

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'list-card-title-input';
        input.value = currentText.trim();
        input.placeholder = 'Название списка';

        // Скрываем заголовок, вставляем input перед кнопкой редактирования
        titleEl.style.display = 'none';
        header.insertBefore(input, editBtn);
        input.focus();
        input.selectionStart = input.value.length;

        const finish = (save) => {
            if (!input.parentElement) return;
            if (save) {
                const newValue = input.value.trim();
                if (newValue.length > 0) {
                    titleEl.textContent = newValue;
                }
            }
            input.remove();
            titleEl.style.display = '';
        };

        input.addEventListener('blur', () => finish(true));

        input.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter') {
                ev.preventDefault();
                finish(true);
            } else if (ev.key === 'Escape') {
                ev.preventDefault();
                finish(false);
            }
        });
    });
})();

// ===== Шеринг списка (кнопка share-btn на странице "Мои списки") =====
(function initListShare() {
    const listsGrid = document.getElementById('listsGrid');
    if (!listsGrid) return; // только на my-lists.html

    listsGrid.addEventListener('click', async (e) => {
        const shareBtn = e.target.closest('.list-action-btn.share-btn');
        if (!shareBtn) return;

        e.preventDefault();
        e.stopPropagation();

        const listCard = shareBtn.closest('.list-card');
        const titleEl = listCard ? listCard.querySelector('.list-card-title') : null;
        const title = titleEl ? titleEl.textContent.trim() : 'Мой список';

        // Формируем ссылку на страницу карточки списка (сейчас одна демо-страница)
        let shareUrl = window.location.href;
        try {
            const url = new URL(window.location.href);
            if (url.pathname.endsWith('my-lists.html')) {
                url.pathname = url.pathname.replace('my-lists.html', 'list-card.html');
            }
            shareUrl = url.toString();
        } catch {
            // если что-то пошло не так, используем текущий URL
        }

        // Пытаемся использовать Web Share API, если доступен
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Список: ${title}`,
                    text: `Смотри мой список: ${title}`,
                    url: shareUrl,
                });
                return;
            } catch (err) {
                // пользователь мог отменить диалог, в этом случае просто выходим
                if (err && err.name === 'AbortError') return;
                // иначе пробуем fallback
            }
        }

        // Fallback: копируем ссылку в буфер обмена
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert('Ссылка на список скопирована в буфер обмена.');
                return;
            } catch {
                // если не удалось — покажем ссылку в alert
            }
        }

        // Самый простой запасной вариант
        alert(`Скопируйте ссылку на список:\n${shareUrl}`);
    });
})();

// ===== Шеринг фильма/сериала (кнопка mobile-share-button на странице карточки фильма) =====
(function initMovieShare() {
    const mobileShareBtn = document.querySelector('.mobile-share-button');
    if (!mobileShareBtn) return; // только на movie-card.html

    mobileShareBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Получаем название фильма/сериала
        const titleEl = document.querySelector('.movie-title');
        const title = titleEl ? titleEl.textContent.trim() : 'Фильм';

        // Используем текущий URL страницы
        const shareUrl = window.location.href;

        // Пытаемся использовать Web Share API, если доступен
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Смотри: ${title}`,
                    url: shareUrl,
                });
                return;
            } catch (err) {
                // пользователь мог отменить диалог, в этом случае просто выходим
                if (err && err.name === 'AbortError') return;
                // иначе пробуем fallback
            }
        }

        // Fallback: копируем ссылку в буфер обмена
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert('Ссылка на фильм скопирована в буфер обмена.');
                return;
            } catch {
                // если не удалось — покажем ссылку в alert
            }
        }

        // Самый простой запасной вариант
        alert(`Скопируйте ссылку на фильм:\n${shareUrl}`);
    });
})();

// ===== ИНИЦИАЛИЗАЦИЯ СПИСКОВ ИЗ HTML НА СТРАНИЦЕ MY-LISTS =====
(function initListsFromHTML() {
    const listsGrid = document.getElementById('listsGrid');
    if (!listsGrid) return; // Работает только на странице my-lists.html

    // Функция для получения списков из localStorage
    function getListsFromStorage() {
        try {
            const stored = localStorage.getItem('mm_user_lists');
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.error('Ошибка при чтении списков из localStorage:', e);
        }
        return [];
    }

    // Функция для сохранения списков в localStorage
    function saveListsToStorage(lists) {
        try {
            localStorage.setItem('mm_user_lists', JSON.stringify(lists));
        } catch (e) {
            console.error('Ошибка при сохранении списков в localStorage:', e);
        }
    }

    // Инициализируем списки из HTML, если их еще нет в localStorage
    const existingLists = getListsFromStorage();
    if (existingLists.length === 0) {
        const listCards = listsGrid.querySelectorAll('.list-card');
        const lists = [];

        listCards.forEach((card, index) => {
            const titleEl = card.querySelector('.list-card-title');
            const quantityEl = card.querySelector('.list-card-quantity');
            
            if (titleEl) {
                const name = titleEl.textContent.trim();
                const quantityText = quantityEl ? quantityEl.textContent.trim() : '';
                const quantityMatch = quantityText.match(/\d+/);
                const quantity = quantityMatch ? parseInt(quantityMatch[0], 10) : 0;

                lists.push({
                    id: `list_${index + 1}_${Date.now()}`,
                    name: name,
                    items: [],
                    createdAt: new Date().toISOString()
                });
            }
        });

        if (lists.length > 0) {
            saveListsToStorage(lists);
        }
    }
})();

// ===== УПРАВЛЕНИЕ СТРАНИЦЕЙ ЗАГРУЗКИ =====
(function initPageLoader() {
    const pageLoader = document.getElementById('pageLoader');
    if (!pageLoader) return;

    // Проверяем, была ли загрузка уже показана в этой сессии
    const loaderShown = sessionStorage.getItem('mediaman_loader_shown');
    
    // Функция для скрытия загрузчика
    function hideLoader(immediate = false) {
        if (pageLoader) {
            if (immediate) {
                // Мгновенное скрытие без анимации
                pageLoader.style.display = 'none';
                if (pageLoader.parentNode) {
                    pageLoader.parentNode.removeChild(pageLoader);
                }
            } else {
                // Плавное скрытие с анимацией
                pageLoader.classList.add('hidden');
                // Удаляем элемент из DOM после анимации
                setTimeout(() => {
                    if (pageLoader.parentNode) {
                        pageLoader.parentNode.removeChild(pageLoader);
                    }
                }, 600);
            }
        }
    }

    // Если загрузка уже была показана, скрываем её сразу
    if (loaderShown === 'true') {
        hideLoader(true);
        return;
    }

    // Функция для завершения загрузки и сохранения флага
    function completeLoader() {
        // Сохраняем флаг, что загрузка была показана
        sessionStorage.setItem('mediaman_loader_shown', 'true');
        hideLoader(false);
    }

    // Ждем полной загрузки страницы
    if (document.readyState === 'complete') {
        // Если страница уже загружена, ждем немного для плавности
        setTimeout(completeLoader, 500);
    } else {
        // Ждем загрузки всех ресурсов
        window.addEventListener('load', () => {
            // Минимальное время показа загрузчика для плавности
            setTimeout(completeLoader, 800);
        });
    }

    // Запасной вариант: скрываем через максимум 3 секунды
    setTimeout(() => {
        if (pageLoader && !pageLoader.classList.contains('hidden') && pageLoader.style.display !== 'none') {
            completeLoader();
        }
    }, 3000);
})();
