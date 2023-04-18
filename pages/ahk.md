## AHK

---

*AHK* est un langage que j'ai créé de toutes pièces. Il est très inspiré de Java et C pour la syntaxe de base mais ne possède pas d'orienté objet.

AHK est mon projet le plus long pour l'instant. D'abord il a fallu concevoir la spécification du langage (syntaxe, opérateurs, fonctions, capacités...) qui permet de définir l'ensemble des codes sources valides et leurs effets. Ensuite il reste à créer le compilateur associé, qui prend un code source en entrée et qui renvoie un exécutable.

J'ai commencé à développer AHK en 2018, j'ai réécris plusieurs fois le compilateur depuis, aujourd'hui le langage est parfaitement utilisable (nonobstant les bugs que je n'ai pas encore trouvé).
Pour l'instant il contient les types primitifs de base, les tableaux, fonctions, structures, types génériques, alias, l'importation d'autre fichiers et la portée des variables, l'allocation dynamique de mémoire avec un garbage collector, l'IO vers des fichiers, les compositions et opérations de fonctions et sans doute plus que j'ai oublié.

---

*Hello, World!* en AHK :
![Missing image](assets/ahk-hello-world.png)

---

Le pipeline pour passer du code source à l'assembleur est relativement simple :
- Code source (texte)
- - Tokenizer
- Suite de tokens
- - Unit parser
- - Statement parser
- - Expression parser
- AST (abstract syntax tree)
- - Linker
- AST lié

Après avoir lié l'AST on peut optimiser et convertir très facilement le code dans n'importe quel format, j'ai choisi l'assembleur :
- AST lié
- - Unit Writer
- - Expression Writer
- - ...
- langage assembleur

Et une fois que l'assembleur est généré je le compile en exécutable avec nasm et ld :
- langage assembleur
- - nasm
- - ld
- exécutable

---

*Structures* en AHK :
![Missing image](assets/ahk-transpiler-vec2.png)

---

Pour l'instant je ne génère que des exécutables 64 bits compatibles linux. MacOS devrait être simple à adapter mais je ne compte pas chercher à compiler pour windows.

Une autre solution que j'étudie est de transformer l'AST lié en AST compatible avec [llvm](https://llvm.org/).

[Page github](https://github.com/Akahara/AHKTranspiler)