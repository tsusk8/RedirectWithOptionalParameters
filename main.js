// 現在のURLからURLオブジェクトを生成（例として、https://example.com上で以下Javascriptを実行しているとする）
const url = new URL(window.location.href);

const params = new URLSearchParams(location.search);
if (params.has('ov') === false) {
    // キーを指定し、クエリパラメータを付与
    url.searchParams.set('ov', '1');
    console.log(url.href); // https://example.com?addParam=test

    // 遷移する
    location.href = url;
}


// 設定したい値はmatchesするwebサイトとクエリパラメータ

// {
//     "name": "Sample",
//     "version": "1.0.0",
//     "manifest_version": 3,
//     "description": "Sample Chrome Extension",
//     "content_scripts": [{
    // matchesに自動で値を入れる
//         "matches": ["https://www.google.com/*"],
//         "js": [
//             "content.js"
//         ]
//     }]
// }