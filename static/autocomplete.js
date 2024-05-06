new autoComplete({
  data: {
    // Data src
    src: films,
  },
  selector: "#autoComplete", // Input field selector
  threshold: 2, // Min. Chars length to start Engine
  debounce: 100, // Post duration for engine to start
  searchEngine: "strict", // Search Engine type/mode
  resultsList: {
    // Rendered results list object
    render: true,
    container: (source) => {
      source.setAttribute("id", "movie_list"); // Assigning a unique ID to the container
    },
    position: "afterend",
    element: "ul",
  },
  maxResults: 5, // Maximum number of rendered results
  highlight: true, // Highlight matching results
  resultItem: {
    // Rendered result item
    content: (data, source) => {
      source.innerHTML = data.match;
    },
    element: "li",
  },

  onSelection: (feedback) => {
    // Action script onSelection event
    document.getElementById("autoComplete").value = feedback.selection.value;
  },
});
