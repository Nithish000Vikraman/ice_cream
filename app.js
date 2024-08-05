function showDescription(flavor) {
    let description = '';
    switch(flavor) {
        case 'vanilla':
            description = 'Vanilla: A classic favorite made with real vanilla beans.';
            break;
        case 'chocolate':
            description = 'Chocolate: Rich and creamy, made with the finest cocoa.';
            break;
        case 'strawberry':
            description = 'Strawberry: Sweet and fruity, made with fresh strawberries.';
            break;
        case 'butterscotch':
            description='Butterscotch: Indulge in the sweet embrace of butterscotch bliss!';
            break;
        case 'pista':
            description='Pista: Get whisked away by the nutty delight of pista perfection!';
            break;
        case 'black current':
            description='Black Current: Dive into the bold and tangy taste of black currant magic!';
            break;
        default:
            description = 'Click on a flavor to learn more!';
    }
    alert(description);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for placing an order !!!');
});
