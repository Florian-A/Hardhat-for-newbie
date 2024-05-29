  Créez un fichier `.env` avec les paramètres suivants :

  ```
  MNEMONIC="votre mnémonique"
  INFURA_PROJECT_ID="ID projet Infura"
  ETHERSCAN_API="API Etherscan"
  ```

  #### Vous pouvez également sur macOS utiliser le trousseau pour stocker votre mnémonique. Pour ce faire, exécutez cette commande :

  ```
  security add-generic-password -a "Mnemonic" -s "Hardhat" -w "votre mnémonique"
  ```

  #### Les différentes commandes disponibles :

- `make install` installe les dépendances.
- `make build` compile le smart contract.
- `make test` lance les tests du smart contract.
- `make deploy` déploie et vérifie le smart contract.

  ---