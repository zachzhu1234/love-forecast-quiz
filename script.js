document.addEventListener('DOMContentLoaded', () => {
    // Get all necessary HTML elements
    const startButton = document.getElementById('start-button');
    const returnButton = document.getElementById('return-button');
    const inputScreen = document.getElementById('input-screen');
    const resultsScreen = document.getElementById('results-screen');
    const dobInput = document.getElementById('dob');

    // 🌟 Meaningful Chinese Lists for Random Generation 🌟
    // Planets/Celestial Bodies with positive/romantic connotations
    const planets = ["金星 (掌管爱与美)", "月亮 (象征情感)", "木星 (带来幸运)", "太阳 (充满活力)", "天王星 (带来惊喜)"];
    // Gems associated with love and relationships
    const gems = ["粉晶 (招桃花)", "月光石 (带来柔情)", "紫水晶 (增强魅力)", "海蓝宝 (带来平静)", "红宝石 (代表热情)"];

    /**
     * Generates a comforting future date (approx. 3-4 months from now).
     * @returns {string} The formatted date string in Chinese.
     */
    function generateForecastDate() {
        const today = new Date();
        // Set the month 3 months into the future
        today.setMonth(today.getMonth() + 3);
        // Add a random number of days (0 to 20) for slight variation and less predictability
        today.setDate(today.getDate() + Math.floor(Math.random() * 20)); 
        
        // Format the date into Chinese (e.g., "2026年4月25日")
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('zh-CN', options);
    }

    // --- START BUTTON LOGIC ---
    startButton.addEventListener('click', () => {
        // Basic validation
        if (!dobInput.value) {
            alert("请输入您的出生年月日才能继续！");
            return;
        }

        // 1. Generate All Random Results
        const luckyNumber = Math.floor(Math.random() * 90) + 10; // 10 to 99 (两位数)
        
        // Randomly select one meaningful item from the arrays
        const luckyPlanet = planets[Math.floor(Math.random() * planets.length)];
        const luckyGem = gems[Math.floor(Math.random() * gems.length)];
        const forecastDate = generateForecastDate();

        // 2. Display Results on Screen 2 (Populate the <span> elements)
        document.getElementById('lucky-number').textContent = luckyNumber;
        document.getElementById('lucky-planet').textContent = luckyPlanet;
        document.getElementById('lucky-gem').textContent = luckyGem;
        document.getElementById('date-forecast').textContent = forecastDate;

        // 3. Screen Transition: Hide input, show results
        inputScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
    });

    // --- RETURN BUTTON LOGIC ---
    returnButton.addEventListener('click', () => {
        // Screen Transition: Hide results, show input
        resultsScreen.classList.add('hidden');
        inputScreen.classList.remove('hidden');
    });
});
