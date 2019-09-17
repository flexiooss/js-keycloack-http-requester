# js-keycloack-http-requester

```javascript
import {XmlHttpRequester, KeyCloackExecutor} from '@flexio-oss/js-keycloack-http-requester'

const keycloak = Keycloak()

new MyApiClient(
  new XmlHttpRequester(
    new KeyCloackExecutor(
      keycloak,
      20,
      () => {
        document.location.reload()
      }
    )
  )
    .XAccount('myAccount'),
  'http://my-api-url.tld'
)
```
