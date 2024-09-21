const categories = Array.from(jCategory);

document.getElementById("searchBar").addEventListener("keyup",(e) =>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) =>
        item.title.toLowerCase().includes(searchData)
    );

    displayitems(filterData);
});

const displayitems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";


    items.forEach((item) =>
        {
      const { index, image, title, rate, avai } = item;
      const jList = document.createElement("div");
      jList.className = "jList";
      jList.innerHTML = `
      <img src="${image}" alt="">
          <h3>${title}</h3>
          <p>${rate}</p>
          <span id="key">${avai}</span>
      `;

      rootElement.appendChild(jList);

      jList.addEventListener('click', () =>{
        window.location.href = `job-d.html?id=${index}`;
        
      })
    });
};

displayitems(categories);

