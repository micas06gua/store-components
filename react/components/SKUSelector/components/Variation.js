import PropTypes from 'prop-types'
import React, { useState, useCallback, memo } from 'react'
import { Button } from 'vtex.styleguide'
import { IOMessage } from 'vtex.native-types'

import SelectorItem from './SelectorItem'
import { stripUrl, isColor } from '../utils'
import { variationShape } from '../utils/proptypes'

import styles from '../styles.css'
import { imageUrlForSize, VARIATION_IMG_SIZE } from '../../module/images'

const ITEMS_VISIBLE_THRESHOLD = 2

const Variation = ({ variation, onSelectItem, maxSkuPrice, checkSelected, seeMoreLabel, maxItems }) => {
  const displayImage = isColor(variation.name)
  const { options } = variation
  const [showAll, setShowAll] = useState(false)
  const visibleItemsWhenCollapsed = maxItems - ITEMS_VISIBLE_THRESHOLD

  const shouldCollapse = !showAll && options.length > maxItems

  const overflowQuantity = options.length - visibleItemsWhenCollapsed

  const displayOptions = options.slice(0, shouldCollapse ? visibleItemsWhenCollapsed : options.length)

  const showAllAction = useCallback(() => setShowAll(true), [])

  return (
    <div
      className={`${styles.skuSelectorSubcontainer} ${
        styles.skuSelectorSubcontainer
      }--${variation.name} flex flex-column mb7`}
    >
      <div className={`${styles.skuSelectorNameContainer} ma1`}>
        <span
          className={`${
            styles.skuSelectorName
          } c-muted-2 db t-small overflow-hidden mb3`}
        >
          {variation.name}
        </span>
        <div className="inline-flex flex-wrap ml2 flex items-center">
          {displayOptions.map(skuItem => {
            const [skuImage] = skuItem.images || [null]
            const [seller] = skuItem.sellers
            return (
              <SelectorItem
                isSelected={checkSelected(skuItem)}
                key={skuItem.itemId}
                isAvailable={seller.commertialOffer.AvailableQuantity > 0}
                maxPrice={maxSkuPrice}
                skuId={skuItem.itemId}
                price={seller.commertialOffer.Price}
                onClick={() => onSelectItem(skuItem.itemId)}
                isImage={displayImage}
                variationValue={skuItem[variation.name]}
              >
                {displayImage && skuImage ? (
                  <img 
                    src={imageUrlForSize(stripUrl(skuImage.imageUrl), VARIATION_IMG_SIZE)}
                    alt={skuImage.imageLabel}
                  />
                ) : (
                  <span className="c-on-base t-body">
                    {skuItem[variation.name]}
                  </span>
                )}
              </SelectorItem>
            )
          })}
          {!showAll && shouldCollapse && (
            <div className={styles.seeMoreButton}>
              <Button variation="tertiary" onClick={showAllAction} size="small" collapseLeft>
                <IOMessage id={seeMoreLabel} values={{ quantity: overflowQuantity }} data-testid="seeMoreLabel" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Variation.propTypes = {
  /** Variation Object */
  variation: variationShape,
  /** On Select item behavior */
  onSelectItem: PropTypes.func,
  /** Max price of SKU */
  maxSkuPrice: PropTypes.number,
  /** Function to verify if this Variation is selected */
  checkSelected: PropTypes.func,
  seeMoreLabel: PropTypes.string,
  maxItems: PropTypes.number,
}

export default memo(Variation)
