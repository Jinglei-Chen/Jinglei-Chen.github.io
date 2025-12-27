// 全自动 GoatCounter 追踪脚本
document.addEventListener('click', function (e) {
    // 检查是否点击了链接 (<a> 标签)
    const link = e.target.closest('a');
    if (!link || !window.goatcounter) return;

    const href = link.getAttribute('href');
    let eventName = '';

    // 逻辑判定：根据链接特征自动分类
    if (href.endsWith('.pdf')) {
        eventName = 'download-cv';
    } else if (href.includes('linkedin.com')) {
        eventName = 'click-linkedin';
    } else if (href.startsWith('mailto:')) {
        eventName = 'click-email';
    }

    // 如果匹配到了我们关心的事件，则发送统计
    if (eventName) {
        window.goatcounter.count({
            path: eventName,
            title: 'Auto Tracked Link: ' + href,
            event: true
        });
    }
}, false);