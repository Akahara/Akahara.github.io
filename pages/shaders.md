## Shaders

---

Les *Shaders* sont des programmes qui tournent sur le GPU plutôt que sur le CPU, c'est un endroit parfait pour créer des effets visuels avec des maths.
On peut en faire des images, des animations complètes ou des effets en temps réel du type vignette ou flou.
C'est aussi dans les shaders qu'on peut explorer les techniques de rendu réalistes comme le *ray tracing* ou le *ray marching* de manière performante.

![Missing image](assets/shader-eye.png)

## Shaders Workspace

---

Pour commencer à utiliser les shaders d'OpenGL il n'y a pas beaucoup de solutions simples,
mettre en place un projet OpenGL est assez long au démarrage et pour simplement tester une
idée ca n'est pas l'idéal. Donc j'ai préféré concevoir un utilitaire qui compile automatiquement
un fichier de shader spécifié et qui affiche le résultat.

Pour l'instant l'executable permet de compiler des Vertex, Fragment, Geometry et Compute Shaders, d'avoir un bon contrôle des uniforms et d'exporter des images et des vidéos avec une recompilation dynamique. C'est très pratique pour créer des animations.
La description complète du projet est sur [github](https://github.com/Akahara/ShadersWorkspace).

Une autre solution est d'utiliser [Shadertoy](https://www.shadertoy.com), c'est globalement la même idée que mon projet mais le rendu et l'éditeur sont combinés dans une interface web. Cela a des avantages et des inconvénients. Je tenais vraiment à pouvoir utiliser un IDE (VSCode en l'occurrence) plutôt que de coder dans un navigateur.

---

Un exemple de rendu de shader, le vrai est animé :
![Missing image](https://github.com/Akahara/ShadersWorkspace/blob/master/screens/summer_butterfly.png?raw=true)

[Page github](https://github.com/Akahara/ShadersWorkspace)