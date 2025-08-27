document.addEventListener('DOMContentLoaded', () => {
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const mainElement = document.querySelector('main');
            mainElement.innerHTML = ''; // 清空现有内容
            data.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.id = `article${article.id}`;
                articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
                mainElement.appendChild(articleElement);
            });
            console.log('JSON数据加载成功:', data); // 验证加载
        })
        .catch(error => console.error('加载JSON失败:', error)); // 捕获错误
});