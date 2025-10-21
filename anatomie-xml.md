<?xml version="1.0" encoding="UTF-8"?>
<film>
    <titre>tata</titre>
    <annee>1986</annee>
    <genre>sci-fi</genre>
    <realisateur>moi</realisateur>
</film>

### version attribut
<?xml version="1.0" encoding="UTF-8"?>
<film id="1" langue="ja">
    <titre>tata</titre>
    <annee>1986</annee>
    <genre type="principal">sci-fi</genre>
    <genre type="secondaire">horreur</genre>
    <realisateur nationalite="fr">moi</realisateur>
    <resume>
        <![CDATA[
            Kevin a déjà été tué !
        ]]>
    
    </resume>
</film>

## CDATA permet d'inclure du texte qui pourrait contenir des carcatères spéciaux.

## les namespace : sert à éviter kes confits de nom.

<?xml version="1.0" encoding="UTF-8"?>
<catalogue xmlns:film="http://mabibli.fr/films"
           xmlns:livre="http://mabibli.fr/livre">
<film:item id="1" langue="ja">
    <film:titre>tata</film:titre>
    <film:annee>1986</film:annee>
    <film:genre type="principal">sci-fi</film:genre>
    <film:genre type="secondaire">horreur</film:genre>
    <film:realisateur nationalite="fr">moi</film:realisateur>
    <film:resume>
        <![CDATA[
            Kevin a déjà été tué !
        ]]>
    
    </film:resume>

</film:item>
<livre:item id="1" langue="ja">
    <livre:titre>tata</livre:titre>
    <livre:annee>1986</livre:annee>
    <livre:genre type="principal">sci-fi</livre:genre>
    <livre:genre type="secondaire">horreur</livre:genre>
    <livre:realisateur nationalite="fr">moi</livre:realisateur>
    <livre:resume>
        <![CDATA[
            Kevin a déjà été tué !
        ]]>
    
    </livre:resume>

</livre:item>
</catalogue>