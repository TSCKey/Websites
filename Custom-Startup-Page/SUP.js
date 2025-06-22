

//              This script handles the search functionality for my custom startup page.


    // Function to perform a Google search when the search button is clicked
        function performSearchGoogle() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.trim(); // Trim whitespace from the input

            if (query) {
                // Encode the query to handle special characters correctly in the URL
                const encodedQuery = encodeURIComponent(query);
                // Construct the Google search URL
                const googleSearchUrl = "https://www.google.com/search?q=" + encodedQuery;
                // Redirect the user to the Google search page
                window.location.href = googleSearchUrl;
            } else {
                // provide feedback if the input is empty
                alert("Please enter a search query!"); 
            }
        }


        // Function to perform a YouTube search when the search button is clicked
                function performSearchYoutube() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.trim();

            if (query) {
                // Encode the query to handle special characters correctly in the URL
                const encodedQuery = encodeURIComponent(query);
                // Construct the YouTube search URL
                const youtubeSearchUrl = "https://www.youtube.com/results?search_query=" + encodedQuery;
                // Redirect the user to the YouTube search page
                window.location.href = youtubeSearchUrl;
            } else {
                //provide feedback if the input is empty
                alert("Please enter a search query!");
            }
        }
        function performSearchTiktok() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.trim();

            if (query) {
                // Encode the query to handle special characters correctly in the URL
                const encodedQuery = encodeURIComponent(query);
                // Construct the TikTok search URL
                const tiktokSearchUrl = "https://www.tiktok.com/search?q=" + encodedQuery;
                // Redirect the user to the TikTok search page
                window.location.href = tiktokSearchUrl;
            } else {
                //provide feedback if the input is empty
                alert("Please enter a search query!");
            }
        }


        // Function to perform a search when the Enter key is clicked
        function handleKeyPress(event) {
            // Check if the pressed key is 'Enter' *key code 13*
            if (event.key === "Enter") {
            const searchInput = document.getElementById('searchInput');
            if (hasDotSomething(searchInput.value.trim())) {
                window.location.href = "https://" + searchInput.value.trim();
            }
            else {
                performSearchGoogle();
            }
        }
    }
    function hasDotSomething(input) {
  return /\.\w+/.test(input);
}
