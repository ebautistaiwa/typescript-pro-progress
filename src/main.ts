//import polyfill
import 'reflect-metadata'
import { Component, Input } from '@angular/core'

/** 
 * Configure Component
*/
@Component({
    selector: 'app'
})
class AppComponent{
    @Input() foo: string
}