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
            Le présent site, accessible à l’URL https://planteo-site.netlify.app/, est édité par : <br></br>

            Sophie Théréau, résidant 119 rue du Fangheat 63160 Egliseneuve-près-Billom, de nationalité Française (France), né(e) le 30/12/1995.
        </p> 

        <h2 className='text-3xl'>Hébergement</h2>

        <p className="my-3">

            Le site est hébergé par Netlify, situé au 2325 3rd Street, Suite 215, San Francisco, CA 94107, États-Unis. Vous pouvez les contacter par téléphone au +1-844-899-7312 ou par email à support@netlify.com.

        </p>
            
        <h2 className='text-3xl'>Directeur de publication</h2>

        <p className="my-3">
        Le Directeur de la publication du Site est Sophie Théréau.

        Je suis joignable : 

        <ul>
            <li>Par téléphone : +33648437627</li>
            <li>Par email : <a href="mailto:sophiethereau@hotmail.fr">sophiethereau@hotmail.fr</a></li>
            <li>Par courrier : 119 rue du Fangheat, 63160 Egliseneuve-près-Billom</li>
    </ul>
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