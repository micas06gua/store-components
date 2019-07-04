# Product Description

## Description

`ProductDescription` is a VTEX Component that shows the description of a product.
This Component can be imported and used by any VTEX App.

:loudspeaker: **Disclaimer:** Don't fork this project, use, contribute, or open issue with your feature request.

## Table of Contents
- [Usage](#usage)
  - [Blocks API](#blocks-api)
  - [Configuration](#configuration)
  - [Styles API](#styles-api)

## Usage

You should follow the usage instruction in the main [README](https://github.com/vtex-apps/store-components/blob/master/README.md#usage).

Then, add `product-description` block into your app theme, as we do in our [Product Details app](https://github.com/vtex-apps/product-details/blob/master/store/blocks.json). 

### Blocks API

This component has an interface that describes which rules must be implemented by a block when you want to use the `ProductDescription`.

```json
  "product-description": {
    "component": "ProductDescription"
  }
```

### Configuration

Through the Storefront, you can change the `ProductDescription`'s behavior and interface. However, you also can make in your theme app, as Dreamstore does.

| Prop name                | Type       | Description          |
| ------------------------ | ---------- |--------------------- |
| `description`            | `String`   | Product description  |

### Styles API
You should follow the Styles API instruction in the main [README](https://github.com/vtex-apps/store-components/blob/master/README.md#styles-api).

Below, we describe the tokens, their explanation and the component where it is located.

| Token name | Component | Description |
| ---------- | --------- |------------ |
| `productDescriptionContainer` | [ProductDescription](https://github.com/vtex-apps/store-components/blob/master/react/components/ProductDescription/index.js) | The main container of `ProductDescription` |

