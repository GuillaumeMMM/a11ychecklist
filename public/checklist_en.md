# 1. The contrast between text color and background color is high enough

## What does the guideline say?

https://www.w3.org/TR/WCAG22/#contrast-minimum 1.4.3

## Why is this rule necessary?

If the contrast is not high enough, the text might be hard to read.

This rule also applies to non-textual UI elements that bear information (for example a colored status dot or the SVG icon of the menu button).

## How to check?

Use an online color contrast checker such as [coolors](https://coolors.co/contrast-checker/112a46-acc8e5), use a [Figma plugin](https://cssauthor.com/best-figma-contrast-checker-plugins/) or use a web extension such as [WCAG color contrast checker](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf) that scans the whole page at once.

Le contraste du texte est valide lorsque :
The color contrast is valid when:

A TRADUIRE

- Soit le texte est < 24px et le contraste est supérieur ou égal à 4,5:1
- Soit le texte est >= 24px et le contraste est supérieur ou égal à 3:1
  Le contraste du composant d'interface est valide lorsque :
- Le composant d'interface a un contraste supérieur ou égal à 3:1 avec son arrière-plan

## Explore further

### Contrast calculation too simple

The formula for the contrast is the following:

> (L1 + 0.05) / (L2 + 0.05), where
>
> - L1 is the relative luminance of the lighter of the colors, and
> - L2 is the relative luminance of the darker of the colors.

cf https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio

The contrast calculation is a linear operation between two colors. It is a simplification that does not takes into account the complexity of how the human eye processes light. Therefore some color combinations might conform to the rule but still be unreadable.

Other algorithms have been established to better match human percettion ([APCA being the most debated online](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)), and WCAG 3 might opt for a more precise contrast formula.

### State of the web

According to [WebAIM](<(https://webaim.org/projects/million/#contrast)>) who gathers data about accessibility of millions of websites every year, in 2026 83.9% of home pages failed the contrast color criteria.

# 2. No information is given by color only

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1

## Why is this rule necessary?

If the color is the only way an information is provided, color blind people might miss that information.

Thi can be the case for exemple for the border of a form field that becomes red (and nothing else) when there's an error, or for color-coded lines in a graph.

## How to check?

Passer l'écran en mode noir et blanc (sur Mac activer le filtre des couleurs dans les options d'accessibilité). Ou installer l'extension [colorblindly](https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg) avec l'option "Monochromacy". Puis vérifier que les éléments d'interface sont toujours visibles et compréhensibles.

## Explore further

### Information critique vs information secondaire

La signification de "information" est sujette à interprétation. Par exemple, un lien bleu qui devient violet quand il a déjà été visité ne constitue pas une non conformité, même si rien d'autre que la couleur n'indique le changement d'état.

### Contraste suffisant

Même si la couleur est la seule source d'information mais que le contraste est suffisamment élevé, on peut parfois considérer le critère conforme (à interpréter au cas par cas en testant l'interface en noir et blanc. Dans le doute il vaut mieux toujours prévoir une autre différentiation que la couleur ou le contraste).

### Daltonisme

À l'échelle mondiale, [5 à 10% des personnes](https://fr.wikipedia.org/wiki/Daltonisme) sont affectées par une forme de daltonisme.

# 3. La hiérarchie des titres est pertinente visuellement et cohérente techniquement

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1

## Why is this rule necessary?

Avoir une hiérarchie des titres pertinente visuellement (comprendre titre principal de la page, sous-titres, titres de sections, etc.) permet aux utilisateur·rices de se repérer plus facilement dans la page.

Avoir une hiérarchie des titres cohérente techniquement (comprendre ordre d'apparition dans le [DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model) des balises `h1`, `h2`, etc.) permet aux utilisateur·rices de technologies d'assistance (par exemple de lecteurs d'écran) de comprendre rapidement le contenu d'une page, et de naviguer simplement vers une section en particulier.

Enfin, si un texte a un style CSS de titre (par exemple un nom de section mis en avant par rapport au corps de texte), il doit être contenu dans une balise de titre HTML, pour que les personnes utilisant des technologies d'assistance puissent accéder rapidement à cette section.

## How to check?

Pour être pertinents, les titres doivent d'abord avoir un contenu textuel unique et explicite, pour qu'une personne naviguant au lecteur d'écran puisse aller vers la bonne section avec certitude.

Les balises `h1`, `h2`, etc. doivent respecter la hiérarchie `h1` > `h2` > `h3` etc. sans sauter de niveau. Pour faire cette vérification, on peut utiliser l'extension web [Headingsmap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi).

Techniquement, les textes ayant un style CSS de titre doivent être contenus dans une balise HTML `h1`, `h2`, etc.

## Explore further

### Balises vs styles CSS

En pratique (pour des raisons techniques), la numérotation des balises `h1`, `h2`, etc ne correspond pas toujours à l'apparence des titres. Par exemple on a parfois un titre principal (avec un style CSS de titre principal) qui est pourtant contenu dans une balise HTML `h2`.

Ce qui est important au final c'est la cohérence visuelle et la logique hiérarchique technique.

### État du web

[D'après WebAIM](https://webaim.org/projects/million/#headings) qui étudie les non-conformités sur des millions de sites tous les ans, en 2026 41,8% des pages d'accueil des sites vérifiés échouaient à avoir une structure de balises de heading HTML cohérente, et 7.5% des pages n'avaient pas de balises HTML de heading du tout.

# 4. La page est toujours fonctionnelle avec un zoom de 200%

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.4

## Why is this rule necessary?

Les utilisateur·rices augmentent souvent la taille du texte pour améliorer la lisibilité. Même sur mobile, beaucoup d'utilisateur·rices paramètrent leurs appareils pour systématiquement augmenter la taille du texte.

## How to check?

Il y a une différence entre augmenter la taille du texte à 200% (ce qui est évalué par le RGAA), et zoomer une page jusqu'à 200%. Le plus sûr est de vérifier les deux systématiquement.

Pour zoomer sur une page :

- Dans le menu du navigateur, aller dans "Présentation" > "zoom avant" jusqu'à atteindre 200%, ou `Ctrl +` ou `Cmd +` (sur Mac).
  Pour augmenter la taille du texte (uniquement) :
- Sur Firefox (un des seuls navigateurs où l'option est disponible par défaut), aller dans "Affichage" > "zoom" > "Agrandir uniquement le texte", puis zoomer sur la page (cf. le point précédent).

Puis vérifier que la page est toujours utilisable de la même manière qu'avec le zoom à 100%. Il faut que, malgré le zoom, les informations accessibles, et les fonctionnalités soient les mêmes qu'à 100%.

## Explore further

### Zoom sur mobile

Le RGAA ne vérifie pas qu'une interface est utilisable avec un zoom à 200% **et** sur un petit écran. Mais c'est un cas d'utilisation relativement fréquent, il est donc important de tester avec ces paramètres.

### Zoom et responsive

Si le code CSS du site testé utilise des unités relatives (comme les `rem`), zoomer (uniquement) le texte de la page déclenche les _breakpoints_ responsive comme si la largeur de la page avait été réduite. Si les _breakpoints_ utilisent des unités absolues (comme les `px`), le zoom du texte laisse la structure de la page telle quelle et augmente uniquement la taille des pixels. Utiliser les unités relatives est une bonne pratique qui permet de se conformer au critère du zoom du texte et de la largeur de la page en même temps.

# 5. La page est fonctionnelle sur toutes les tailles d'écran

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.11

## Why is this rule necessary?

Les utilisateur·rices doivent pouvoir utiliser le site testé sur différents appareils, et en particulier sur des tablettes ou des mobiles. Du mobile de 320px de large zoomé à 200% à l'écran géant, il est important de prendre en compte l'ensemble des tailles d'écran possibles.

## How to check?

Ouvrir l'inspecteur de code sur la page web : sur Mac `Cmd Maj i` ou clic droit puis "inspecter l'élément". Ensuite, faire varier la largeur de la barre latérale de l'inspecteur pour diminuer l'espace disponible du site web.

Pour toutes largeurs d'écran au-dessus de 320px, et pour toutes hauteurs d'écran au-dessus de 256px, les mêmes informations doivent être accessibles et les fonctionnalités doivent être les mêmes que sur n'importe quelle autre taille d'écran. Les informations ou éléments interactifs ne doivent pas sortir de l'écran.

Les dimensions 320px et 256px correspondent à un petit smartphone (qui peut être en format portrait ou paysage). Donc c'est soit l'un soit l'autre, et il n'est pas nécessaire de tester un écran qui aurait à la fois 320px de largeur et 256px de hauteur.

## Explore further

### Toutes les tailles d'écran

Il faut s'assurer que le site peut être utilisé pour toutes les tailles d'écran au-dessus de 320px de large. Les largeurs d'écran des utilisateur·rices sont [extrêmement variées](https://viewports.fyi/) (différents modèles d'appareils mobile, de tablettes, d'ordinateurs, différentes tailles de navigateurs, en mode vertical ou horizontal, avec des marges de l'application qui ouvre le site web, etc.).

Les _breakpoints_ qui sont souvent des largeurs fixées par les designers sont uniquement indicatifs, et ne correspondent pas nécessairement aux tailles d'écran les plus utilisées.

De même, il vaut mieux éviter de parler de taille "mobile", "tablet" ou "desktop". Il n'y a presque pas de correspondance entre largeur d'écran et type d'appareil. Par exemple, un écran de 1500px de large ("desktop") avec un zoom à 200% peut très bien afficher le même contenu avec la même structure qu'un écran de 320px de large ("mobile") avec un zoom à 100%.

# 6. Le texte est toujours lisible après avoir augmenté les espacements du texte

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.12

## Why is this rule necessary?

Les utilisateur·rices peuvent avoir besoin d'augmenter l'espace entre les caractères du texte, entre les mots, entre les lignes ou entre les paragraphes pour mieux les lire.

## How to check?

Ouvrir l'inspecteur de code sur la page web : sur Mac `Cmd Maj i` ou clic droit, puis "inspecter l'élément". Dans l'onglet "Console", coller le code suivant et appuyer sur `Enter` :

```js
(function () {
  const elements = document.querySelectorAll("*");
  for (const el of elements) {
    el.style.lineHeight = "1.5";
    el.style.letterSpacing = "0.12em";
    el.style.wordSpacing = "0.16em";
  }

  const paragraphs = document.querySelectorAll("p");
  for (const p of paragraphs) {
    p.style.marginBottom = "2em";
  }
})();
```

Ce script augmente les espacement de la page. Il faut alors que le site testé soit utilisable de la même manière qu'avant, et qu'aucune information n'ait disparue. Attention en particulier aux blocs qui ont une largeur fixe (comme certains champs de formulaire) qui risquent de voir disparaitre une partie de leur contenu textuel.

# 7. Le _title_ de la page est unique et pertinent

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.5
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.6

## Why is this rule necessary?

Le _title_ d'une page est le texte qui apparait en tant que nom de l'onglet dans le navigateur.

Ce texte constitue le nom de la page pour que les utilisateur·rices puissent identifier rapidement le contenu d'un onglet. C'est très utile aux utilisateur·rices de technologies d'assistance pour comprendre le contenu de la page quand elle s'ouvre (par exemple à la suite d'une redirection ou d'une navigation). Les lecteurs d'écran annoncent ce texte en premier quand on arrive sur la page.

À ne pas confondre avec les titres (_headings_) éventuels de la page qui sont, eux, inclus dans le contenu de la page et qui sont entourés de balises `h1`, `h2`, etc.

## How to check?

Pour voir le texte du _title_ en entier, on peut passer la souris sur l'onglet dans la barre d'onglets du navigateur. On trouve aussi ce texte en entier dans la balise `title` incluse dans la balise `head` du code HTML : ouvrir l'inspecteur de code sur la page web : sur Mac `Cmd Maj i` ou clic droit, puis "inspecter l'élément", puis dans l'onglet "Elements".

Il faut non seulement que ce _title_ existe, mais aussi qu'il indique clairement le contenu de la page.

## Explore further

### Organisation de l'information

Il est de plus préférable que ce texte décrive la page du plus précis au plus général, par exemple : "Ajoutez un avatar - Création de compte - Mon Site" pour la sous-page d'ajout d'avatar du formulaire de création de compte du site "Mon Site".

Avoir cet ordre permet aux utilisateur·rices de lecteurs d'écran d'entendre annoncer directement le contexte le plus précis de la page, et d'éviter d'avoir à attendre la répétition du nom du site à chaque changement de page.

# 8. Les éléments interactifs (liens, boutons, champs de formulaires, etc.) sont opérables au clavier

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.3

## Why is this rule necessary?

Certain·es utilisateur·rices naviguent et opèrent les sites web uniquement au clavier. Pour que ces personnes puissent utiliser le site testé de la même manière qu'un·e utilisateur·rice de souris, il faut que chaque élément interactif puisse être atteint et puisse être actionné en utilisant uniquement le clavier.

## How to check?

Parcourir la page ou la fonctionnalité en appuyant sur `TAB` pour aller à l'élément interactif suivant, et `Maj TAB` pour revenir à l'élément interactif précédent.

- Les boutons doivent pouvoir être activés avec `Space` ou `Enter`
- Les liens doivent pouvoir être activés avec `Enter`
- Les cases à cocher doivent pouvoir être cochées ou décochées avec `Space`
- Les éléments déclenchant l'ouverture d'une _popup_, d'un _dropdown_ ou autre doivent pouvoir être ouverts au clavier (`Space`, `Enter`, `Arrow Down` ou autre [en fonction du pattern](https://www.w3.org/WAI/ARIA/apg/patterns/))
- Les boutons radio doivent pouvoir être navigables avec `Up Arrow` et `Down Arrow` ou `Left Arrow` et `Right Arrow`
- Les "tooltips" doivent apparaitre au focus de l'élément déclencheur
- Les _dialogs_ doivent se fermer avec `Escape`

## Explore further

### Comportement natif

Par défaut, l'utilisation des balises HTML `button`, `a` (link), `input` etc. intègre déjà les interactions nécessaires pour la navigation au clavier. Si le code HTML respecte cette sémantique, la vérification devrait être une formalité.

### Patterns W3C

Le W3C [donne une liste](https://www.w3.org/WAI/ARIA/apg/patterns/) détaillée des différents patterns d'éléments et les recommandations liées à la navigation au clavier. Ces patterns ne sont pas mentionnés par le RGAA qui [stipule simplement que](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) :

> - Un composant d’interface (lien, bouton…) est accessible au clavier et par tout dispositif de pointage lorsque l’utilisateur peut prendre, indifféremment, le focus par un pointeur ou la touche tabulation ;
> - Un composant d’interface (lien, bouton…) est activable au clavier et par tout dispositif de pointage lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par une pression du pointeur ou la touche entrée du clavier ;

# 9. Les éléments interactifs (liens, boutons, champs de formulaires, etc.) sont atteignables au clavier dans un ordre logique

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.8

## Why is this rule necessary?

Si l'ordre de navigation au clavier ne respecte pas un ordre cohérent (l'ordre le plus cohérent n'est pas systématiquement l'ordre de lecture classique), les utilisateur·rices peuvent se perdre dans la page, et interagir avec le mauvais élément.

## How to check?

Parcourir la page testée avec `TAB` et `Maj TAB` et vérifier que l'ordre de la prise de focus des éléments interactifs est cohérent.

# 10. Les éléments interactifs (liens, boutons, champs de formulaires, etc.) ont un style de focus visible

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.7

## Why is this rule necessary?

Pour que les personnes naviguant au clavier se situent dans la page, et pour qu'elles sachent quel élément interactif est actionnable, il faut que l'élément portant le focus soit facilement identifiable. Le plus souvent, on reconnait cet élément à un contour externe.

## How to check?

Parcourir la page testée avec `TAB` et `Maj TAB` et vérifier qu'on distingue toujours à l'écran quel élément est en focus.

## Explore further

### Visibilité du contour de focus

Pour que l'élément qui est en focus soit facilement identifiable, il faut que le contour du _focus_ soit suffisamment épais, et que son contraste avec l'arrière-plan soit suffisant. [Le W3C donne des indications (en anglais)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) sur la marche à suivre pour designer un contour de _focus_ accessible. Le RGAA quant à lui précise un contraste minimum :

> Pour chaque élément susceptible de recevoir le focus, vérifier que l’indication visuelle de la prise de focus est présente (en agissant sur le contour ou le fond ou les deux) et est suffisamment contrastée (ratio de contraste égal ou supérieur à 3:1) ;

# 11. Les liens et boutons ont un nom accessible explicite

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2

## Why is this rule necessary?

Certain·es utilisateur·rices parcourent les pages web en se déplaçant de bouton en bouton ou de lien en lien. Comment savoir alors à quoi sert un bouton "Cliquez ici", ou comment savoir vers quel lien "Lire plus" naviguer s'il y en a plusieurs sur la page ? Il est important que les boutons et liens soient compréhensibles par leur nom, hors de leur contexte visuel.

Aussi, les utilisateur·rices de commande vocale ont besoin d'accéder à un bouton par son nom. Si celui-ci n'est pas unique, cette opération devient compliquée.

Enfin, pour les utilisateur·rices de lecteurs d'écran, si un lien a pour nom un URL tel que "http://www...", le lecteur va annoncer chaque caractère de l'URL, ce qui est long, souvent incompréhensible et facilement évitable.

## How to check?

Il faut s'assurer que tous les liens et boutons ont un nom (soit un texte visible, soit un texte annoncé par les lecteurs d'écran qui atteignent l'élément).
Il faut que les noms soient compréhensibles hors de leur contexte et qu'ils soient uniques.

## Explore further

### Attribut `title`

L'attribut `title` ajoute un nom à un élément qui apparait dans une _popup_ du navigateur si on laisse la souris sur l'élément suffisamment longtemps. C'est un "faux" _tooltip_ qui ne doit pas être considéré comme un nom accessible. En effet, cet attribut a deux limitations :

- Il est impossible de déclencher son ouverture pour les utilisateur·rices de claviers
- Historiquement les technologies d'assistance supportent mal cet attribut, et la restitution textuelle peut être imprévisible
  Le RGAA est flou à ce sujet, et les critères [11.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9), [6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1) et [6.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2) restent conformes, mais l'utilisation du `title` rend le critère [10.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13) non conforme dans certains audits RGAA.

# 12. Les messages d'erreur des champs de formulaire sont associés techniquement au champ concerné et restitués immédiatement

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10

## Why is this rule necessary?

Restituer automatiquement les messages d'erreur au moment où ils surviennent est essentiel pour que les utilisateur·rices de ces technologies comprennent l'erreur qui a été faite sans avoir besoin de naviguer dans la page jusqu'à l'endroit où l'erreur est affichée (souvent sous le champ mais parfois en bas du formulaire).

Lorsqu'un·e utilisateur·rice de lecteur d'écran navigue jusqu'à un champ en erreur, si le message d'erreur est lié techniquement au champ, l'erreur est annoncée par le lecteur d'écran. Si le lien technique n'est pas fait (et si, contrairement au point précédent, l'erreur ne vient pas d'avoir lieu), l'utilisateur·rice doit aller chercher dans le formulaire quel message d'erreur correspond à ce champ.

## How to check?

En testant avec un lecteur d'écran, remplir le champ de formulaire et lorsqu'une erreur survient sur un champ, s'assurer qu'elle est restituée immédiatement.

En naviguant avec le clavier et un lecteur d'écran de champ en champ avec `TAB` et `Maj TAB`, si un des champs sur lequel le focus passe est en erreur, s'assurer que le lecteur d'écran restitue le texte de l'erreur.

## Explore further

### Différents types d'annonces

Il existe [plusieurs méthodes](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) pour qu'un contenu soit restitué de cette manière. Un texte peut être :

- restitué en mode "assertive" (le message est alors annoncé immédiatement quitte à interrompre la restitution en cours). Ce mode est surtout utilisé pour les messages très importants comme les erreurs
- restitué en mode "polite" (le message sera lu après la restitution en cours). En général on privilégie ce mode pour éviter d'ajouter de la confusion à la restitution.

# 13. Les messages d'information dynamiques (toasts, notifications _popup_) sont annoncés aux technologies d'assistance

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5

## Why is this rule necessary?

Les messages de notification qui apparaissent à l'écran après une action donnent souvent des informations essentielles aux utilisateur·rices. Les personnes utilisant des lecteurs d'écran ne peuvent pas lire ce message au moment où il est utile s'il n'est pas restitué.

## How to check?

En utilisant un lecteur d'écran, faire une action qui déclenche l'apparition d'une notification. Le contenu de celle-ci doit être restitué.

## Explore further

### Différents types d'annonces

Il existe [plusieurs méthodes](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) pour qu'un contenu soit restitué de cette manière. Un texte peut être :

- restitué en mode "assertive" (le message est alors annoncé immédiatement quitte à interrompre la restitution en cours). Ce mode est surtout utilisé pour les messages très importants comme les erreurs
- restitué en mode "polite" (le message sera lu après la restitution en cours). En général on privilégie ce mode pour éviter d'ajouter de la confusion à la restitution.

# 14. Les liens indiquent clairement s'ils ouvrent un nouvel onglet

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1

## Why is this rule necessary?

Revenir sur l'onglet depuis lequel a été ouverte la page actuelle peut être laborieux pour les utilisateur·rices de lecteurs d'écran ou de clavier, alors que revenir sur la page précédente en restant dans le même onglet est plus simple.

Par défaut, les liens du web s'ouvrent dans le même onglet, il vaut donc toujours mieux être explicite quand le lien s'ouvre dans un nouvel onglet.

## How to check?

Les liens ouvrant un nouvel onglet doivent avoir un signe distinctif (par exemple une icône) qui est compréhensible visuellement comme étant un signe d'ouverture dans un nouvel onglet. Au lecteur d'écran, il faut qu'au nom accessible du lien soit accolé la mention "Nouvelle fenêtre" ou "Nouvel onglet" (souvent il s'agit du nom accessible de l'icône elle-même).

## Explore further

### UX du changement d'onglet

Pour essayer de faciliter la navigation entre les onglets de l'utilisateur·rice, il est même conseillé d'ouvrir le moins souvent possible un lien dans un nouvel onglet, les utilisateur·rices pouvant le faire eux-mêmes si c'est ce qu'ils souhaitent.

# 15. Les champs de formulaire ont une étiquette (_label_) décrivant leur rôle

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4

## Why is this rule necessary?

Pour comprendre le rôle d'un champ de formulaire (visuellement ou via les technologies d'assistance), le champ doit être accolé à son étiquette (_label_), et il doit être lié techniquement à celle-ci.

## How to check?

Il faut d'abord que tous les champs de formulaire (checkbox, select, input texte, input date, etc.) aient une étiquette visible.

Si l'étiquette est bien liée techniquement au champ, le clic sur l'étiquette devrait placer le focus dans le champ en question.

Il est possible que le champ soit étiquetté par un texte ailleurs sur la page. Dans ce cas, il faut vérifier que le lecteur d'écran annonce le texte en question quand l'utilisateur·rice _focus_ le champ.

Quel que soit le type d'étiquette, celle-ci doit être restituée par le lecteur d'écran au moment où le champ est atteint.

Attention, le _placeholder_ des inputs ne fait pas office d'étiquette car il a 3 limitations:

- Il n'est pas systématiquement compris par les technologies d'assistance
- Il disparait quand on commence à taper dans le champ. Par exemple arriver sur un formulaire pré-rempli ne nous permet pas de connaitre le rôle des champs
- Il a souvent un contraste trop faible avec l'arrière-plan qui le rend illisible, ou un contraste trop proche du corps de texte qui le confond avec du texte qui aurait été entré dans le champ

## Explore further

### Absence d'étiquette textuelle

En pratique il faut toujours avoir une étiquette textuelle visible. Cependant il existe des exceptions dans les cas où le rôle du champ est extrêmement clair pour les utilisateur·rices.

Par exemple pour un champ de texte recherche portant une icône de loupe (celle-ci ayant pour nom accessible "Rechercher"), alors on comprend (visuellement et via les technologies d'assistance) que c'est un champ de recherche.

# 16. Les champs de formulaire obligatoires sont marqués comme obligatoires visuellement et techniquement

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10

## Why is this rule necessary?

Pour aider au remplissage des formulaires, il faut indiquer clairement quels champs sont obligatoires.

## How to check?

Au lecteur d'écran, lorsqu'on atteint le champ obligatoire, la mention "obligatoire" doit être restituée après l'annonce de l'étiquette du champ. C'est le cas automatiquement quand le champ porte l'attribut `required` ou `aria-required="true"`.

Visuellement on doit voir sur les champs obligatoires :

- soit une indication textuelle "obligatoire"/"requis" accolée au nom du champ
- soit un symbole (souvent l'astérisque "\*") accolé au nom du champ, avec sur la même page l'explication de la signification du symbole (Par exemple le texte suivant en début de formulaire : "Tous les champs suivis d'un '\*' sont obligatoires")

On peut préférer ajouter la précision en début de formulaire "Tous les champs sont obligatoires", et accoler la mention "optionnel" aux étiquettes des champs non-obligatoires.

# 17. Les champs de formulaire qui attendent un format spécifique l'expliquent dans un texte lié au champ techniquement et visuellement

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10

## Why is this rule necessary?

Certains champs de formulaire attendent un format spécifique pour que le formulaire soit valide. Quand c'est le cas il est important de le faire savoir aux utilisateur·rices en amont. Par exemple, un champ de date doit préciser s'il s'agit d'une date en "JJ/MM/AAAA" ou d'un autre format.

Attention, le _placeholder_ des inputs ne fait pas office de format car il a 3 limitations :

- Il n'est pas systématiquement compris par les technologies d'assistance
- Il disparait quand on commence à taper dans le champ. Par exemple après avoir commencé à taper l'utilisateur·rice a peut-être oublié le format complet attendu
- Il a souvent un contraste trop faible avec l'arrière-plan qui le rend illisible, ou un contraste trop proche du corps de texte qui le confond avec du texte qui aurait été entré dans le champ

## How to check?

Visuellement le format doit être identifiable comme étant lié au champ qu'il concerne.

Si le format attendu n'est pas directement inclus dans l'étiquette du champ, il faut vérifier avec un lecteur d'écran que le format est restitué lorsque le champ est atteint. Par défaut, lorsque l'utilisateur·rice soumet un formulaire invalide, le navigateur repositionne immédiatement le focus dans le premier champ en erreur. Un·e utilisateur·rice peut donc être en _focus_ dans le champ sans avoir pu consulter le contexte immédiat de celui-ci (indication du format). C'est pourquoi il faut vérifier que lors du _focus_ du champ le format est restitué.

Il faut que le format soit accessible avant d'avoir commis la première erreur.

## Explore further

### Exemples de remplissage

Parfois les champs sont agrémentés d'exemples de remplissage. Par exemple un champ "Nom" peut être précédé du texte "Raphaël Durand". Ces exemples font souvent office d'explication du format, ils doivent donc être traités de la même manière. En particulier, ils ne doivent pas être intégrés au _placeholder_.

# 18. Les images, icônes et emoji ont des alternatives pertinentes

## What does the guideline say?

https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2

## Why is this rule necessary?

Les éléments picturaux qui sont porteurs d'information doivent être accessibles à tous les utilisateur·rices de la même manière, même aux personnes utilisatrices de technologies d'assistance.
Les éléments picturaux uniquement décoratifs doivent être paramétrés pour être ignorés par les technologies d'assistance pour éviter d'interférer avec la restitution.

## How to check?

Parcourir les images, icônes et emoji au lecteur d'écran. S'ils sont porteurs d'information, leur description doit être restituée. S'ils sont décoratifs, ils ne doivent pas être annoncés du tout (même la restitution par défaut des images par les lecteurs d'écran "Image" ne doit pas être annoncée).

Il faut aussi vérifier que l'alternative est pertinente. Elle doit décrire le contenu visuel en restant simple, pour permettre aux utilisateur·rices de lecteurs d'écran d'opérer le site comme les autres utilisiateur·ices.

## Explore further

### Emoji

Les lecteurs d'écran attribuent automatiquement un texte alternatif aux emoji qui risque de rendre le texte dans lequel ils sont inclus difficile à comprendre. Il vaut souvent mieux les exclure de la restitution ou remplacer leur texte alternatif.
