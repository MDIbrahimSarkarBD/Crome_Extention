// formlistTW.js

const formlistTW = (function() {
    let iconData; // Variable to store JSON data

    async function fetchIconData() {
        try {
            const response = await fetch('/data/icon.json');
            if (!response.ok) {
                throw new Error('Failed to fetch JSON');
            }
            iconData = await response.json();
           // console.log('JSON data loaded:', iconData);
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }

    async function init() {
        await fetchIconData();
        // Other initialization logic
    }

    function getIconData() {
        return iconData;
    }

    return {
        init,
        getIconData
    };
})();

export default formlistTW;
