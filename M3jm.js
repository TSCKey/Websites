        /**
         * @function performSearch
         * @description Constructs the Google search URL from the input and redirects the user.
         */
        function performSearch() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.trim(); // Get the input value and remove leading/trailing whitespace

            if (query) {
                // Encode the query to handle special characters correctly in the URL
                const encodedQuery = encodeURIComponent(query);
                // Construct the Google search URL
                const googleSearchUrl = `https://www.google.com/search?q=${encodedQuery}`;
                // Redirect the user to the Google search page
                window.location.href = googleSearchUrl;
            } else {
                // Optionally provide feedback if the input is empty
                alert("Please enter a search query!"); // Using a simple alert for this example, consider a custom modal in a full app.
            }
        }

        /**
         * @function handleKeyPress
         * @description Allows pressing Enter key to trigger the search.
         * @param {Event} event - The keyboard event.
         */
        function handleKeyPress(event) {
            // Check if the pressed key is 'Enter' (key code 13)
            if (event.keyCode === 13) {
                performSearch();
            }
        }