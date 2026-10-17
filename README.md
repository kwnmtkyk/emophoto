# Film Lab Studio — v0.1

ブラウザ上で写真をフィルム風に現像する試作アプリです。GitHub Pagesで動作します。写真はサーバーにアップロードされません。

## 公開方法

1. このフォルダ内のファイルとサブフォルダを、そのままGitHubリポジトリのルートにアップロードします。
2. リポジトリの **Settings → Pages → Build and deployment** で **Deploy from a branch** を選び、`main` / `(root)` を指定して保存します。
3. 公開されたURLにアクセスします。`index.html` をファイルとして直接開くと、ブラウザの制限によりシェーダーを読み込めないことがあります。

ローカルテスト: このフォルダ内で `python -m http.server 8000` を実行し、`http://localhost:8000/` にアクセスしてください。

## 実装済み

- JPEG / PNG / WebPなどブラウザ対応画像の読み込み、ドラッグ＆ドロップ
- WebGL 2によるプレビューとJPEG出力
- 8プリセット（Original、Portra 400、Gold 200、Ektar 100、Fujifilm 400、Velvia 50、HP5 Plus、Tri-X 400）
- 露出・コントラスト・彩度・色温度・色かぶり・ハイライト・シャドウ・グレイン・フェード・周辺減光等
- 長押しで元画像比較、JSON形式で編集設定の保存・読み込み
- 17³のサンプル3D LUT（独自近似）

## 現時点の制限

- **メーカー公式のフィルム再現ではありません。** 付属LUTは検証用の独自近似であり、測定済みフィルムプロファイルではありません。
- ハレーションは明部の色付き光量調整のみで、周辺ピクセルへのにじみを伴う物理的なモデルは未実装です。`shaders/effects.frag` は将来のマルチパス処理のための下地で、現行アプリでは未使用です。
- RAW現像、ICC色管理、EXIF保持、写真の回転・トリミング、Undo履歴は未実装です。
- 書き出し時はGPUの最大テクスチャサイズとブラウザのメモリ制限を受けます。元画像の寸法での書き出しを試みますが、すべての端末で保証されません。
- WebGL 2非対応環境では動作しません。

## 今後の拡張

1. 参照フィルム実写・カラーチャートを用いたLUT校正
2. ハレーション・ブルームの複数パスぼかし
3. カーブ編集・HSL調整・ユーザーLUTのインポート
4. タイル処理による超高解像度書き出し
5. PWAとiPadOSへの展開

## 構成

`index.html`、`css/style.css`、`js/app.js`、`js/image-engine.js`、`js/film-presets.js`、`js/grain.js`、`js/halation.js`、`js/export.js`、`shaders/color.frag`、`shaders/effects.frag`、`luts/*.cube`


## v0.1.1 修正
- WebGL 2 フラグメントシェーダーに `precision highp sampler3D;` を追加。
- 3D LUT を `RGB32F` から `RGB8` に変更し、標準的な WebGL 2 環境で線形補間可能にしました。
