import HeroSection from "../components/HeroSection";

function Legals (){
    return <>
    <HeroSection title = "Mentions légales"/>
    <div className="m-16">
        <p className="my-3">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Planteo l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h2 className='text-3xl'>Edition du site </h2>

        <p className="my-3">
            Le présent site, accessible à l’URL planteo.atwebpages.com, est édité par : <br></br>

            Sophie Théréau, résidant 119 rue du Fangheat 63160 Egliseneuve-près-Billom, de nationalité Française (France), né(e) le 30/12/1995.
        </p> 

        <h2 className='text-3xl'>Hébergement</h2>

        <p className="my-3">
            Le Site est hébergé par la société Awardspace, situé Zetta Hosting Solutions LTD. Bulgaria, 9000 Varna, Belogradchik Street 8, (contact téléphonique ou email : +35929751696).
        </p>
            
        <h2 className='text-3xl'>Directeur de publication</h2>

        <p className="my-3">
        Le Directeur de la publication du Site est Sophie Théréau.

        Je suis joignable : 

        Par téléphone : +33648437627
        Par email : sophiethereau@hotmail.fr
        Par courrier : 119 rue du Fangheat 63160 Egliseneuve-près-Billom
        </p>    

        <h2 className='text-3xl'>Données personnelles</h2>

        <p className="my-3">
            Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
        </p>
            
        <p className="my-3">
            Génération des mentions légales par Legalstart.
        </p>
    </div>
    </>
}

export default Legals;