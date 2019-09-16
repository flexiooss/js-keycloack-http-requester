/* global XMLHttpRequest */

import {globalFlexioImport} from '@flexio-oss/global-import-registry'

import {ExecutorRequesterInterface, ExecutorWorker} from '@flexio-oss/xmlhttp-requester'

/**
 * @implements {ExecutorRequesterInterface}
 */
export class KeyCloackExecutorWorker extends ExecutorWorker {
  /**
   *
   * @param {KeyCloack} keyCloack
   * @param {number} minValidity
   * @param {function} redirectClb
   */
  constructor(keyCloack, minValidity, redirectClb) {
    super()
    this.__keyCloack = keyCloack
    this.__minValidity = minValidity
    this.__redirectClb = redirectClb
  }

  /**
   *
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @return {XmlHttpRequestDelegate}
   * @protected
   */
  _setAuthToken(xmlhttpRequestDelegate) {
    return globalFlexioImport.io.flexio.xmlhttp_requester.types.XmlHttpRequestDelegateBuilder
      .from(xmlhttpRequestDelegate)
      .header('Authorization', `Bearer ${this.__keyCloack}`)
      .build()
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  get(xmlhttpRequestDelegate, callback) {

    this.__keyCloack
      .updateToken(this.__minValidity)
      .success(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          this._listenWorker(
            this._initWorker(
              new globalFlexioImport.io.flexio.xmlhttp_requester.types.RequestMessageWorkerBuilder()
                .method('GET')
                .requestDelegate(
                  this._checkRequestType(
                    this._setAuthToken(
                      this._setAuthToken(xmlhttpRequestDelegate)
                    )
                  )
                )
                .build()
            ),
            callback
          )
        })
      .error(() => {
        this.__redirectClb()
      })

  }

  /**
   /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} [contentType=null]
   * @param {?string} [body=null]
   */
  post(xmlhttpRequestDelegate, callback, contentType = null, body = null) {

    this.__keyCloack
      .updateToken(this.__minValidity)
      .success(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          this._listenWorker(
            this._initWorker(
              new globalFlexioImport.io.flexio.xmlhttp_requester.types.RequestMessageWorkerBuilder()
                .method('POST')
                .requestDelegate(
                  this._checkRequestType(
                    this._ensureContentType(
                      this._setAuthToken(xmlhttpRequestDelegate),
                      contentType
                    )
                  )
                )
                .body(body)
                .build()
            ),
            callback
          )
        }).error(() => {
      this.__redirectClb()
    })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} contentType
   * @param {?string} body
   */
  put(xmlhttpRequestDelegate, callback, contentType = null, body = null) {

    this.__keyCloack
      .updateToken(this.__minValidity)
      .success(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          this._listenWorker(
            this._initWorker(
              new globalFlexioImport.io.flexio.xmlhttp_requester.types.RequestMessageWorkerBuilder()
                .method('PUT')
                .requestDelegate(
                  this._checkRequestType(
                    this._ensureContentType(
                      this._setAuthToken(xmlhttpRequestDelegate),
                      contentType
                    )
                  )
                )
                .body(body)
                .build()
            ),
            callback
          )
        }).error(() => {
      this.__redirectClb()
    })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} contentType
   * @param {?string} body
   */
  patch(xmlhttpRequestDelegate, callback, contentType = null, body = null) {

    this.__keyCloack
      .updateToken(this.__minValidity)
      .success(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          this._listenWorker(
            this._initWorker(
              new globalFlexioImport.io.flexio.xmlhttp_requester.types.RequestMessageWorkerBuilder()
                .method('PATCH')
                .requestDelegate(
                  this._checkRequestType(
                    this._ensureContentType(
                      this._setAuthToken(xmlhttpRequestDelegate),
                      contentType
                    )
                  )
                )
                .body(body)
                .build()
            ),
            callback
          )
        }).error(() => {
      this.__redirectClb()
    })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  delete(xmlhttpRequestDelegate, callback) {

    this.__keyCloack
      .updateToken(this.__minValidity)
      .success(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          this._listenWorker(
            this._initWorker(
              new globalFlexioImport.io.flexio.xmlhttp_requester.types.RequestMessageWorkerBuilder()
                .method('DELETE')
                .requestDelegate(
                  this._checkRequestType(
                    this._setAuthToken(xmlhttpRequestDelegate)
                  )
                )
                .build()
            ),
            callback
          )
        }).error(() => {
      this.__redirectClb()
    })
  }

  /**
   * @param {XmlHttpRequestDelegate} xmlhttpRequestDelegate
   * @param {ExecutorRequesterInterface~executionClb} callback
   */
  head(xmlhttpRequestDelegate, callback) {

    this.__keyCloack
      .updateToken(this.__minValidity)
      .success(
        /**
         *
         * @param {boolean} refreshed
         */
        (refreshed) => {

          this._listenWorker(
            this._initWorker(
              new globalFlexioImport.io.flexio.xmlhttp_requester.types.RequestMessageWorkerBuilder()
                .method('HEAD')
                .requestDelegate(
                  this._checkRequestType(
                    this._setAuthToken(xmlhttpRequestDelegate)
                  )
                )
                .build()
            ),
            callback
          )
        }).error(() => {
      this.__redirectClb()
    })
  }
}
