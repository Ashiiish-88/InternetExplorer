let tabCounter = 1;

        function performSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput.value;
            
            if (searchTerm.trim() !== '') {
               
                alert(`Surfing to: ${searchTerm}`);
                
               
                const loadingBar = document.getElementById('loadingBar');
                loadingBar.style.width = '100%';
                
                setTimeout(() => {
                    loadingBar.style.width = '0';
                }, 2500);
            }
        }

        function addNewTab() {
            const tabsContainer = document.getElementById('tabsContainer');
            tabCounter++;
            
            const newTab = document.createElement('button');
            newTab.className = 'tab';
            newTab.innerHTML = `
                🌐 New Tab ${tabCounter}
                <button class="tab-close" onclick="closeTab(event)">✕</button>
            `;
            newTab.onclick = () => selectTab(newTab);
            
            
            tabsContainer.insertBefore(newTab, tabsContainer.lastElementChild);
            selectTab(newTab);
        }

        function closeTab(event) {
            event.stopPropagation();
            const tab = event.target.closest('.tab');
            
            
            const tabsContainer = document.getElementById('tabsContainer');
            if (tabsContainer.querySelectorAll('.tab').length > 1) {
                tab.remove();
                
                const previousTab = tab.previousElementSibling || tabsContainer.querySelector('.tab');
                selectTab(previousTab);
            }
        }

        function selectTab(tab) {
            
            document.querySelectorAll('.tab').forEach(t => {
                t.style.opacity = '0.7';
                t.style.background = 'var(--accent-color)';
            });
            
            
            tab.style.opacity = '1';
            tab.style.background = 'var(--highlight-color)';
        }

        function showRetroModal() {
            alert("Welcome to the Retro Zones! This feature is coming soon.");
        }
        document.getElementById('searchInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
        selectTab(document.querySelector('.tab'));