// 변수 초기화
const _swiper = document.querySelector('.swiper-container');
const _items = document.querySelectorAll('.swiper-item');
const _prev = document.querySelector('.prev');
const _next = document.querySelector('.next');
const length = _items.length;
let _index = 0;
let isTransitioning = false;

// 슬라이드 이동 함수
function swiperMove() {
    _swiper.style.transition = 'transform 0.3s ease-out';
    _swiper.style.transform = 'translateX(' + (-_index * 100 / length) + '%)';
}

// 다음 버튼 클릭 이벤트 핸들러
_next.addEventListener('click', function () {
    if (!isTransitioning) {
        isTransitioning = true;
        if (_index < length - 1) {
            _index++;
        } else {
            _index = 0;
        }
        swiperMove();
        setTimeout(function () {
            isTransitioning = false;
            if (_index === 0) {
                _swiper.style.transition = 'none';
                _swiper.style.transform = 'translateX(0)';
                _index = 1;
                setTimeout(function () {
                    _swiper.style.transition = 'transform 0.3s ease-out';
                    _swiper.style.transform = 'translateX(' + (-_index * 100 / length) + '%)';
                }, 0);
            }
        }, 300);
    }
});