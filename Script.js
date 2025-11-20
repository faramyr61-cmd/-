document.addEventListener('DOMContentLoaded', function() {

  // --- وظيفة التمرير الأفقي باستخدام الأزرار (اختياري) ---
  // يمكنك إضافة أزرار لليمين واليسار في ملف HTML لتفعيل هذه الميزة
  const scrollContainer = document.querySelector('.hom');
  if (scrollContainer) {
    // يمكنك إضافة زر "التالي" في ملف HTML
    const nextBtn = document.getElementById('next');
    // يمكنك إضافة زر "السابق" في ملف HTML
    const prevBtn = document.getElementById('prev');

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
          left: 300, // مقدار التمرير بالبكسل
          behavior: 'smooth' // يجعل التمرير سلساً
        });
      });

      prevBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      });
    }
  }


  // --- عرض رسالة عند النقر على الروابط ---
  // الحصول على جميع الروابط داخل الصفحة
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // احصل على عنوان الرابط (href)
      const href = this.getAttribute('href');

      // إذا كان الرابط فارغاً أو يحتوي على #، امنع الانتقال واعرض رسالة
      if (href === '' || href === '#') {
        event.preventDefault(); // امنع السلوك الافتراضي للرابط
        alert('عذراً، هذه الصفحة قيد الإنشاء حالياً.');
      }
    });
  });

  // --- تغيير لون خلفية الفوتر عند مرور الماوس ---
  const footer = document.querySelector('footer');
  if (footer) {
    const originalColor = footer.style.backgroundColor; // حفظ اللون الأصلي
    footer.addEventListener('mouseover', function() {
      // تغيير اللون عند مرور الماوس
      this.style.backgroundColor = '#28B8C6';
    });

    footer.addEventListener('mouseout', function() {
      // إعادة اللون الأصلي عند ابتعاد الماوس
      this.style.backgroundColor = originalColor;
    });
  }

  // --- عرض رسالة ترحيب عند فتح الصفحة ---
  alert('أهلاً بك في موقع جزيرة سقطرى!');

});
