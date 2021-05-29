import React from 'react'
import axios from 'axios'
import cogoToast from 'cogo-toast'
import Button from '@material-ui/core/Button'

const createPosts = () => {

    let description = 'mahan satyam ajdhvjhsdv'
    const uid = 'google-oauth2|111865168548379027385'

    const returnUniqueName = () =>{
        return uid+'adtkfcjs'
    }

    const onSubmit = () =>{
        const config = {
            url : 'https://feelfree12.herokuapp.com/v1/graphql',
            method : 'post',
            
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZEcXI1eDdIT1FOOXNELWRwaFoxSSJ9.eyJodHRwczovL2ZlZWxmcmVlLmNvbS9mY3RfY2xhaW1zIjp7InRva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhkV1FpT2lKb2RIUndjem92TDJsa1pXNTBhWFI1ZEc5dmJHdHBkQzVuYjI5bmJHVmhjR2x6TG1OdmJTOW5iMjluYkdVdWFXUmxiblJwZEhrdWFXUmxiblJwZEhsMGIyOXNhMmwwTG5ZeExrbGtaVzUwYVhSNVZHOXZiR3RwZENJc0ltbGhkQ0k2TVRZeU1qSTFOVFUxTVN3aVpYaHdJam94TmpJeU1qVTVNVFV4TENKcGMzTWlPaUptYVhKbFltRnpaUzFoWkcxcGJuTmtheTE0Tld3MmFrQm1aV1ZzWm5KbFpXVXRPVGs1Wm1RdWFXRnRMbWR6WlhKMmFXTmxZV05qYjNWdWRDNWpiMjBpTENKemRXSWlPaUptYVhKbFltRnpaUzFoWkcxcGJuTmtheTE0Tld3MmFrQm1aV1ZzWm5KbFpXVXRPVGs1Wm1RdWFXRnRMbWR6WlhKMmFXTmxZV05qYjNWdWRDNWpiMjBpTENKMWFXUWlPaUpuYjI5bmJHVXRiMkYxZEdneWZERXhNVGcyTlRFMk9EVTBPRE0zT1RBeU56TTROU0o5LnNFZTVIUmpxTWtZUWVOOWlCY3lTNmU0M19HU0J4WlNTOXJkU09ibFdFVGhGTHg1V29uYVlKYVFSQzJHVVFURG9Pb0c3QmxTaHVxaDlaR3NFWlFGTmxrcGNST3RCc1BwTDdlc05ySy1CQXhIQ3N3Wmtsc1lWM3hLSy15MUNmcUQ2SV96SXJiN09DcDFTV2ZiM0lUcXoyZEVHNXY3dmFITmpQNUxON0FCaXlVYXZ6MWZSd2lyaXBYcEpPSFp4MGVTQk1RanQ2QjlCV2Z1WGlCYVdWdGVNTEd3T2piRUxMeDFqd3J1V0VRV3JKM3ZYakdMWFM2ZW5fY2xxUkE5Zm43aHIzYmQzX1R3VzRySFBSVFhsdW9zZGFqQi1qTlp0QzdweVg1SFdQQ3JyYUdXMWtzczM4TGoxb3R5bTVtVVIxR19TaVVzY29Oa09Eb1pNRGJwZUhORF8wZyJ9LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTExODY1MTY4NTQ4Mzc5MDI3Mzg1In0sImdpdmVuX25hbWUiOiJOaWxhbmphbiIsImZhbWlseV9uYW1lIjoiTWFqdW1kZXIiLCJuaWNrbmFtZSI6Im4ubWFqdW1kZXIxNCIsIm5hbWUiOiJOaWxhbmphbiBNYWp1bWRlciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZ05NRWFISG90akRPRXhmY1MtcVBXeVJVRUI4NjJGN3lJbjFMbjF3akE9czk2LWMiLCJsb2NhbGUiOiJlbiIsInVwZGF0ZWRfYXQiOiIyMDIxLTA1LTI4VDE4OjU1OjQ2LjU2M1oiLCJlbWFpbCI6Im4ubWFqdW1kZXIxNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kZXYtZDhxYnlxaGQuanAuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTExODY1MTY4NTQ4Mzc5MDI3Mzg1IiwiYXVkIjoiUGFaN1NWSVJmT2VYb0RXSnpvZ1htblJ5UndBSmVheEgiLCJpYXQiOjE2MjIyNTU1NTIsImV4cCI6MTYyMjI5MTU1Mn0.ULK-OhP7DnoGIPVAB0kvKlQKosWv1PuTXM5w_f_wpvC0RAooQPmEgImmRfylPFmY2nstYrbo4QsaPb9OF3dvs8KHgkKzdkrDfcc3NyAn127sMMUGebBhywpbiTMXvzNPeXNp-YZipEQJE6EXDHY3Z6x0WMZRkVj5pblwyGaPhldc7r1lv8Ntsm5G1-o8eGwhszGFIOLg7nWk2pRjt_wOTfiyH4spLjUmJ2cNgau463W5QJNhiH8GN267MPmYgq1alcE2tGzfmNRVseaxeVTUmDoudUNBd_BnIzGc-K0SyvDg1fN16cTmKevI-Ul-J_7EwPfMG8FCiL7DXL-0g1X_Hg',
                  },

            data : {
                query:`mutation {
                    insert_posts(objects: {description: "${description}", picture: "fdsghj", posted_by: "${uid}", random_name: "${returnUniqueName()}"}) {
                      affected_rows
                    }
                  }`
            }
            
        }

        axios(config)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })

            }
    return (
        <div>
            <Button onClick={()=>onSubmit()} color="primary">
                Submit
            </Button>
        </div>
    )
}

export default createPosts
