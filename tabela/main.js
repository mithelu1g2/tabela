// Consulta a API e popula a tabela
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("productTableBody");

    for (let i = 0; i < 10; i++) {
      const product = data[i];
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.category}</td>
        <td><img src="${product.image}" alt="Imagem do Produto" style="width: 50px; height: auto;" /></td>
      `;

      tableBody.appendChild(row);
    }
  })
  .catch(error => console.error("Erro ao carregar os produtos:", error)); 
