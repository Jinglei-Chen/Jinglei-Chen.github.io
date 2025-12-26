document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const contentSections = document.querySelectorAll('.content-section');
    const defaultSectionId = 'about'; // 默认显示 'about' 模块

    function showSection(targetId) {
        // 隐藏所有内容区域
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // 移除所有导航链接的 active 状态
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // 显示目标区域
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // 激活相应的导航链接
        const activeLink = document.querySelector(`.main-nav a[data-section="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // 绑定导航栏点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            showSection(targetId);
            // 可以在 URL 中更新 hash，实现浏览器历史和分享
            window.history.pushState(null, '', `#${targetId}`); 
        });
    });

    // 根据 URL hash 或默认值显示初始页面
    const initialHash = window.location.hash.substring(1) || defaultSectionId;
    showSection(initialHash);
});