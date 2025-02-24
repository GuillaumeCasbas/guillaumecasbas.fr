---
title: "Gagnez du temps: testez votre code !"
description: "Le TDD et les tests ralentissent-ils vraiment le développement ? Découvrez pourquoi tester son code permet d'éviter des bugs coûteux et d'accélérer les livraisons en production."
slug: gagnez-tu-temps-testez-votre-code
tags: [TDD, Démystifions le TDD]
hide_table_of_contents: false
draft: true
---

TODO: faire un object global de mes tags

Dans le monde du développement logiciel, la rapidité de livraison est souvent vue comme un indicateur clé de performance. Cependant, cette quête de vitesse peut parfois amener à sous-estimer un aspect essentiel : les tests .Pourtant, plus un bug est détecté tard, plus il est coûteux à corriger. Dans cet article, je vous montre pourquoi tester n’est pas une perte de temps, mais un investissement pour livrer plus vite et plus sereinement et, pourquoi pas, transformer votre manière de développer ;).

<!-- truncate -->

IDEA: On peut etre tenté de vouloir aller vite et livrer le code le plus vite possible. Les raisons sont multiple:
- Sprint chargé
- Besoin business urgent

# Partie 1 : Un bug ça peut couter cher 

Les bugs bug sont inévitables, chaque nouvelle ligne dans nos programme sont une possibilité de bug.
Cependant, plus un un bug est détecté tard, plus il devient coûteux à corriger.

![The cost of fixing bugs](/img/sketchplanations-fixing-bugs.png)
Source: https://sketchplanations.com/fixing-bugs


**En phase de développement:** identifier et corriger un bug est extrêmement rapide, tout est encore frais dans notre esprit. Le cout se résumer à quelques minutes de notre temps
**En phase de test ou de préproduction:** la correction prend plus de temps, car il faut reproduire le bug, comprendre son origine et refaire tous le cycle de CI/CD (PR, validation, déploiement en staging). Le cout est un peu plus long, car va mobiliser le temps de la QA, des déploiements, …
**En production:** le coût explose. Il faut d'abord détecter le bug (souvent grâce aux retours utilisateurs ou à des logs), puis le reproduire pour le comprendre, le corriger et livrer un correctif en urgence. Et le bug en prod sur une feature développée y a 6 mois : ça peut prendre plusieurs jours à débugger. Le cout peut être catastrophique, en plus du temps de devéloppement + QA + deploiement, il y a aussi l'impact utilisateur et/ou business

# Partie 2 : Les tests automatisés, une solution (TODO: revoir ce titre)

Une méthode fiable pour détecter les bugs rapidement reste d'écrire des tests.

Les tests permettent d'identifier les bugs tôt dans le cycle de développement
réduisant ainsi les coûts de correction
En écrivant des tests dès le début, les développeurs peuvent s'assurer que chaque composant fonctionne comme prévu avant même de l'intégrer au reste du système.
Cette approche proactive permet de détecter les problèmes rapidement et de les corriger à moindre coût.
De plus, les tests automatisés peuvent être exécutés à chaque modification du code, garantissant une qualité constante et réduisant le risque de régressions.

TODO: ajouter une partie qui explique que pour gagner du temps il faut écrire des tests de qualités
Remercier Julien pour cette partie
C'est une sujet qu'on pourra voir en détail. Mais si je peux donner un conseil sur cette partie c'est: EVITER au maximum les tests d'implémentation. Car ils bloque le refactoring, donc la rapidité avec laquelle on peut faire évoluer le code

# Partie 3 : Le TDD, une méthodologie à s'approprier

Le développement piloté par les tests, TDD pour intimes, est souvent perçu comme une méthodologie lente, car elle nécessite d'écrire des tests avant même de coder.

Cependant j'espère que les parties précédentes vont ont convaincus que écrire des tests le plus tôt possible sont en réalité un gage de gagner temps à très court terme.


 Je suis heureux de vous expliquer TDD, qui signifie "Test-Driven Development". TDD est un cycle de développement où le développeur écrit des tests avant d'écrire du code. Il s'agit d'un processus où le développeur écrit un test pour une fonctionnalité donnée, exécute le test pour voir qu'il échoue (car le code n'a pas encore été écrit), écrit alors le code pour faire que le test passe et enfin refactorise le code pour améliorer sa qualité.

Il y a plusieurs avantages à adopter TDD :

1. **Rédiger des tests avant de coder** : Les tests permettent de mieux comprendre les exigences et de documenter le code. En écrivant les tests avant de coder, vous assurez que vous avez un bon sens des exigences avant de commencer le développement réel.
2. **Faciliter la maintenance du code** : Les tests peuvent être utiles pour identifier des erreurs ou des problèmes qui peuvent survenir lors de la maintenance du code. En écrivant des tests, vous pouvez identifier ces problèmes plus tôt et les résoudre facilement.
3. **Réduire les erreurs** : Les tests peuvent aider à réduire les erreurs et à augmenter la qualité du code. Les tests peuvent être utilisés pour identifier des erreurs dans le code avant qu'elles n'affectent la fonctionnalité.
4. **Améliorer la confiance du code** : Les tests peuvent aider à améliorer la confiance dans le code. En écrivant des tests, vous pouvez assurer que le code fonctionne comme prévu et que les changements n'affectent pas la fonctionnalité.
5. **Gagner du temps** : Bien que TDD nécessite plus de temps initialement pour écrire les tests, il peut réduire le temps nécessaire pour résoudre les erreurs et résoudre les problèmes. Cela peut finalement réduire le temps total nécessaire pour terminer un projet.
6. **Promouvoir le Clean architecture** : Les tests peuvent aider à promouvoir l'architecture propre en permettant de tester chaque composant de l'architecture individuellement. Cela permet de garantir que chaque composant fonctionne correctement et que les modifications ne sont pas difficiles à implémenter.
7. **Faciliter la collaboration entre développeurs** : Les tests peuvent aider à faciliter la collaboration entre développeurs en permettant de vérifier que chaque composant fonctionne correctement avant de le passer à l'étape suivante. Cela peut aider à éviter les blocages et à garantir que chaque composant fonctionne correctement avant qu'il ne soit intégré à l'application.

Cependant, cette perception est trompeuse. Le TDD encourage une conception modulaire et facilite les modifications futures, contribuant à une plus grande sérénité au sein des équipes. En adoptant le TDD, les développeurs s'assurent que chaque fonctionnalité est testée dès le départ, réduisant ainsi le besoin de corrections ultérieures.

Le TDD est une compétence qui s'acquiert avec la pratique et qui offre des avantages significatifs à long terme.

## Préjugé : le TDD c'est attendre le code parfait

> Le soucis du TDD est qu'il bloque la livraison dans l'attente d'avoir le code parfait

Je l'entends souvent, mais je ne partage pas ce point de vu.

Pour moi, le TDD, comme les méthodologies agiles, ne reste que des outils : il faut se les approprier et les adapter au contexte du projet.
Pour revenir au TDD, le principe est d'écrire le test qui fait avancer le logiciel dans la direction que l'on souhaite (de préférence un baby step), pas nécéssairement d'écrire tous les cas possibles et immaginables. Un conseil que je peux vous donner c'est d'utilisez [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) dans le choix des tests: se poser la question *"Est-ce que écrire ce test fait avancer la feature sur laquelle je travaille ?"* *"Est-ce que que ce cas de test est vraiment cohérant ?"*

Il faut trouver le bon dosage en prennant en compte le contexte du projet, le budget du client, la charge de travail, etc. Pour vous donner un exemple: admettons que je sois sous l'eau et qu'une regle métier est appelée de manière triviale. Un test d'intégration et 2 ou 3 tests unitaires sur la logique métier et j'envoie le code en QA. Les autres cas de tests seront à ajouter si vraiment un cas particulier est manquant.

# Conclusion

Investir dans les tests et adopter le TDD offre des avantages indéniables pour permettre aux développeurs de livrer rapidement des features robustes dans le temps. Cette approche permet de détecter les bugs plus tôt, réduisant ainsi les coûts et améliorant la qualité du code. Elle favorise également une conception modulaire et facilite les modifications futures, contribuant à une plus grande sérénité au sein des équipes. En intégrant les tests dans votre processus de développement, vous assurez une livraison plus rapide et plus fiable de vos applications.

Oui, il faut livrer de la valeur (donc notre code) rapidement, mais gardez à l'esprit que valeur d'une feature se trouve à la fois dans ce qu'elle apporte aux utilisateurs mais aussi dans sa robustesse dans le temps. C'est pourquoi **gagnez du temps en écrivant des tests**: vous éviterez les regressions en les détectant le plus tôt possible et vous vous assurez la fiabilité et la scalabilité du code dans le temps

# Ouverture

Dans le prochain article de cette série, nous explorerons le bon dosage des tests à écrire pour maximiser les bénéfices tout en optimisant le temps de développement. Restez connectés pour découvrir comment trouver l'équilibre parfait entre tests et développement !

---


